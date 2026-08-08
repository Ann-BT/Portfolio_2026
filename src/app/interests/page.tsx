// src/app/interests/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiPlay, 
  FiPause, 
  FiSkipBack, 
  FiSkipForward, 
  FiVolume2, 
  FiVolumeX, 
  FiRepeat, 
  FiPlus, 
  FiTrash2, 
  FiVideo, 
  FiUploadCloud,
  FiX 
} from "react-icons/fi";
import Footer from "@/components/Footer";
import styles from "./Interests.module.css";

export interface VideoTrack {
  id: string;
  title: string;
  artist: string;
  src: string;
  duration?: string;
  isCustom?: boolean;
}

const initialVideoTracks: VideoTrack[] = [
  {
    id: "v1",
    title: "Meaningful Love (Instrumental)",
    artist: "Instrumental Collection",
    src: "/media/meaningful_love.mp4",
    duration: "3:42"
  },
  {
    id: "v2",
    title: "Shut Up My Moms Calling",
    artist: "Hotel Ugly",
    src: "/media/shutup_my_moms_calling.mp4",
    duration: "2:45"
  }
];

export default function InterestsPage() {
  const [tracks, setTracks] = useState<VideoTrack[]>(initialVideoTracks);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(80);
  const [isLooping, setIsLooping] = useState<boolean>(true);

  // Time & Duration tracking
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const videoRef = useRef<HTMLVideoElement>(null);

  // Upload modal state
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [uploadType, setUploadType] = useState<"file" | "url">("file");
  const [newFile, setNewFile] = useState<File | null>(null);
  const [newUrl, setNewUrl] = useState<string>("");
  const [newTitle, setNewTitle] = useState<string>("");
  const [newArtist, setNewArtist] = useState<string>("");

  // Load custom playlist from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("merlin_local_playlist");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setTracks(parsed);
        }
      } catch (e) {
        // Fallback to defaults
      }
    }
  }, []);

  const saveTracks = (newTracks: VideoTrack[]) => {
    setTracks(newTracks);
    localStorage.setItem("merlin_local_playlist", JSON.stringify(newTracks));
  };

  const currentTrack = tracks[currentTrackIndex] || tracks[0];

  // Sync video play/pause and volume with state
  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.volume = volume / 100;
    videoRef.current.muted = isMuted;

    if (isPlaying) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => setIsPlaying(false));
      }
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying, currentTrackIndex, volume, isMuted]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleVideoEnded = () => {
    if (isLooping) {
      handleNextTrack();
    } else {
      setIsPlaying(false);
    }
  };

  const handleNextTrack = () => {
    if (tracks.length === 0) return;
    const nextIdx = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIdx);
    setIsPlaying(true);
  };

  const handlePrevTrack = () => {
    if (tracks.length === 0) return;
    const prevIdx = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(prevIdx);
    setIsPlaying(true);
  };

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleToggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetTime = Number(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = targetTime;
      setCurrentTime(targetTime);
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return "0:00";
    const mins = Math.floor(secs / 60);
    const remainder = Math.floor(secs % 60);
    return `${mins}:${remainder.toString().padStart(2, "0")}`;
  };

  // Add / Upload video handler
  const handleAddTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    let finalSrc = "";

    if (uploadType === "file" && newFile) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        const dataUrl = evt.target?.result as string;
        if (dataUrl) {
          const newTrackItem: VideoTrack = {
            id: `custom-${Date.now()}`,
            title: newTitle.trim(),
            artist: newArtist.trim() || "Uploaded Media",
            src: dataUrl,
            duration: "LOCAL",
            isCustom: true
          };

          const updated = [...tracks, newTrackItem];
          saveTracks(updated);
          setCurrentTrackIndex(updated.length - 1);
          setIsPlaying(true);
          resetForm();
        }
      };
      reader.readAsDataURL(newFile);
      return;
    } else if (uploadType === "url" && newUrl.trim()) {
      finalSrc = newUrl.trim();
    } else {
      return;
    }

    const newTrackItem: VideoTrack = {
      id: `custom-${Date.now()}`,
      title: newTitle.trim(),
      artist: newArtist.trim() || "Local Media",
      src: finalSrc,
      duration: "MEDIA",
      isCustom: true
    };

    const updated = [...tracks, newTrackItem];
    saveTracks(updated);
    setCurrentTrackIndex(updated.length - 1);
    setIsPlaying(true);
    resetForm();
  };

  const resetForm = () => {
    setNewFile(null);
    setNewUrl("");
    setNewTitle("");
    setNewArtist("");
    setIsAddModalOpen(false);
  };

  const handleDeleteTrack = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (tracks.length <= 1) return;
    const updated = tracks.filter((t) => t.id !== id);
    saveTracks(updated);
    if (currentTrackIndex >= updated.length) {
      setCurrentTrackIndex(0);
    }
  };

  return (
    <>
      <section className={styles.interestsPage}>
        <div className="swiss-container">
          
          {/* Section Header */}
          <header className={styles.header}>
            <h1 className={styles.title}>Interests</h1>
            <p className={styles.subtitle}>
              Local media deck, native video playback, and custom playlist collection.
            </p>
          </header>

          {/* Section Subtitle */}
          <div className={styles.sectionHeaderRow}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titleDot} />
              <span>Media Player // Local Stream</span>
            </h2>

            <button 
              onClick={() => setIsAddModalOpen(true)}
              className={styles.addTrackBtn}
            >
              <FiUploadCloud />
              <span>UPLOAD VIDEO</span>
            </button>
          </div>

          {/* Main Music Grid: Video Left | Playlist Right */}
          <div className={styles.musicGrid}>
            
            {/* Left Column: Native HTML5 Video Viewport & Controls Bar */}
            <div className={styles.playerColumn}>
              
              {/* Native Video Screen Frame */}
              <div className={styles.videoScreen}>
                {currentTrack ? (
                  <video
                    ref={videoRef}
                    key={currentTrack.id}
                    src={currentTrack.src}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={handleVideoEnded}
                    controls
                    className={styles.videoElement}
                  />
                ) : (
                  <div className={styles.emptyScreen}>NO MEDIA SELECTED</div>
                )}
              </div>

              {/* Deck Info Banner */}
              <div className={styles.trackBanner}>
                <div className={styles.bannerInfo}>
                  <div className={styles.bannerHeader}>
                    <span className={styles.nowPlayingTag}>NOW PLAYING //</span>
                    <span className={styles.trackIndexBadge}>
                      TRACK {(currentTrackIndex + 1).toString().padStart(2, "0")}/{tracks.length.toString().padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className={styles.bannerTitle}>{currentTrack?.title}</h3>
                  <div className={styles.bannerArtist}>{currentTrack?.artist}</div>
                </div>

                {/* Animated Equalizer Visualizer */}
                {isPlaying && (
                  <div className={styles.equalizer}>
                    <span className={styles.eqBar} style={{ animationDelay: "0s" }} />
                    <span className={styles.eqBar} style={{ animationDelay: "0.2s" }} />
                    <span className={styles.eqBar} style={{ animationDelay: "0.4s" }} />
                    <span className={styles.eqBar} style={{ animationDelay: "0.1s" }} />
                  </div>
                )}
              </div>

              {/* Progress Seek Bar */}
              <div className={styles.seekerRow}>
                <span className={styles.timeText}>{formatTime(currentTime)}</span>
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleSeek}
                  className={styles.timeSeeker}
                  aria-label="Video seek bar"
                />
                <span className={styles.timeText}>{formatTime(duration)}</span>
              </div>

              {/* Interactive Audio Controls Bar */}
              <div className={styles.controlsBar}>
                
                {/* Prev / Play / Next */}
                <div className={styles.mainControls}>
                  <button 
                    onClick={handlePrevTrack}
                    className={styles.controlBtn}
                    title="Previous Track"
                    aria-label="Previous Track"
                  >
                    <FiSkipBack />
                  </button>

                  <button 
                    onClick={handleTogglePlay}
                    className={`${styles.controlBtn} ${styles.playBtn}`}
                    title={isPlaying ? "Pause" : "Play"}
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <FiPause /> : <FiPlay />}
                  </button>

                  <button 
                    onClick={handleNextTrack}
                    className={styles.controlBtn}
                    title="Next Track"
                    aria-label="Next Track"
                  >
                    <FiSkipForward />
                  </button>
                </div>

                {/* Loop toggle */}
                <button
                  onClick={() => setIsLooping(!isLooping)}
                  className={`${styles.controlBtn} ${isLooping ? styles.activeControl : ""}`}
                  title={isLooping ? "Auto-Next Enabled" : "Auto-Next Disabled"}
                  aria-label="Toggle Auto-Next"
                >
                  <FiRepeat />
                </button>

                {/* Mute & Volume Slider */}
                <div className={styles.volumeControl}>
                  <button
                    onClick={handleToggleMute}
                    className={styles.controlBtn}
                    title={isMuted ? "Unmute" : "Mute"}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <FiVolumeX /> : <FiVolume2 />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setVolume(val);
                      if (val > 0 && isMuted) setIsMuted(false);
                    }}
                    className={styles.volumeSlider}
                    aria-label="Volume Slider"
                  />
                </div>

              </div>

            </div>

            {/* Right Column: Playlist Manager List */}
            <div className={styles.playlistColumn}>
              <div className={styles.playlistHeader}>
                <span className={styles.playlistTitle}>
                  <FiVideo />
                  <span>PLAYLIST // {tracks.length} VIDEOS</span>
                </span>
                <span className={styles.playlistNote}>SELECT TO PLAY</span>
              </div>

              <div className={styles.playlistScroll}>
                {tracks.map((track, idx) => {
                  const isActive = idx === currentTrackIndex;
                  return (
                    <div
                      key={track.id}
                      onClick={() => {
                        setCurrentTrackIndex(idx);
                        setIsPlaying(true);
                      }}
                      className={`${styles.playlistRow} ${isActive ? styles.activeRow : ""}`}
                    >
                      {/* Track index / Play state */}
                      <span className={styles.rowIdx}>
                        {isActive ? (
                          <FiPlay className={styles.activePlayIcon} />
                        ) : (
                          (idx + 1).toString().padStart(2, "0")
                        )}
                      </span>

                      {/* Title & Artist */}
                      <div className={styles.rowMeta}>
                        <h4 className={styles.rowTitle}>{track.title}</h4>
                        <span className={styles.rowArtist}>{track.artist}</span>
                      </div>

                      {/* Duration & Delete */}
                      <div className={styles.rowRight}>
                        {track.duration && (
                          <span className={styles.rowDuration}>{track.duration}</span>
                        )}
                        {tracks.length > 1 && (
                          <button
                            onClick={(e) => handleDeleteTrack(track.id, e)}
                            className={styles.deleteTrackBtn}
                            title="Remove video from playlist"
                          >
                            <FiTrash2 />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Upload Video Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className={styles.modalOverlay} onClick={() => setIsAddModalOpen(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={styles.modalCard}
            >
              <div className={styles.modalHeader}>
                <h3>UPLOAD VIDEO TO PLAYLIST</h3>
                <button onClick={() => setIsAddModalOpen(false)} className={styles.modalClose}>
                  <FiX />
                </button>
              </div>

              {/* Upload Type Switcher */}
              <div className={styles.tabBar}>
                <button
                  type="button"
                  onClick={() => setUploadType("file")}
                  className={`${styles.tabBtn} ${uploadType === "file" ? styles.activeTab : ""}`}
                >
                  Upload File (.mp4 / .webm)
                </button>
                <button
                  type="button"
                  onClick={() => setUploadType("url")}
                  className={`${styles.tabBtn} ${uploadType === "url" ? styles.activeTab : ""}`}
                >
                  Media Direct URL
                </button>
              </div>

              <form onSubmit={handleAddTrackSubmit} className={styles.modalForm}>
                {uploadType === "file" ? (
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Choose Video File *</label>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        setNewFile(file);
                        if (file && !newTitle) {
                          setNewTitle(file.name.replace(/\.[^/.]+$/, ""));
                        }
                      }}
                      required
                      className={styles.fileInput}
                    />
                  </div>
                ) : (
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Direct Video URL *</label>
                    <input
                      type="url"
                      value={newUrl}
                      onChange={(e) => setNewUrl(e.target.value)}
                      required
                      placeholder="https://example.com/video.mp4"
                      className={styles.formInput}
                    />
                  </div>
                )}

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Video Title *</label>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    required
                    placeholder="e.g. My Favorite Track"
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Artist / Author Name</label>
                  <input
                    type="text"
                    value={newArtist}
                    onChange={(e) => setNewArtist(e.target.value)}
                    placeholder="e.g. Artist Name"
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.modalActions}>
                  <button type="submit" className={styles.submitModalBtn}>
                    <span>ADD TO PLAYLIST</span>
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setIsAddModalOpen(false)} 
                    className={styles.cancelModalBtn}
                  >
                    CANCEL
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
