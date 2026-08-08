// src/app/interests/page.tsx
"use client";

import { useEffect, useState } from "react";
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
  FiMusic, 
  FiX 
} from "react-icons/fi";
import Footer from "@/components/Footer";
import styles from "./Interests.module.css";

export interface Track {
  id: string;
  title: string;
  artist: string;
  youtubeUrl: string;
  duration?: string;
  isCustom?: boolean;
}

const initialTracks: Track[] = [
  {
    id: "t1",
    title: "Neon Blade",
    artist: "MoonDeity",
    youtubeUrl: "https://www.youtube.com/watch?v=YT1Z1D8dO0o",
    duration: "4:25"
  },
  {
    id: "t2",
    title: "Metamorphosis",
    artist: "INTERWORLD",
    youtubeUrl: "https://www.youtube.com/watch?v=F0B7HDiY-10",
    duration: "2:22"
  },
  {
    id: "t3",
    title: "RAVE",
    artist: "Dxrk 🔥",
    youtubeUrl: "https://www.youtube.com/watch?v=H74tN7eO138",
    duration: "2:49"
  },
  {
    id: "t4",
    title: "I Really Want to Stay at Your House",
    artist: "Rosa Walton & Hallie Coggins",
    youtubeUrl: "https://www.youtube.com/watch?v=KvMY1XuhLwY",
    duration: "4:06"
  }
];

export default function InterestsPage() {
  const [tracks, setTracks] = useState<Track[]>(initialTracks);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(80);
  const [isLooping, setIsLooping] = useState<boolean>(true);

  // Add track modal state
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [newUrl, setNewUrl] = useState<string>("");
  const [newTitle, setNewTitle] = useState<string>("");
  const [newArtist, setNewArtist] = useState<string>("");
  const [newDuration, setNewDuration] = useState<string>("");

  // Load custom playlist from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("merlin_playlist_tracks");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setTracks(parsed);
        }
      } catch (e) {
        // Fallback to default initialTracks
      }
    }
  }, []);

  // Save playlist helper
  const saveTracks = (newTracks: Track[]) => {
    setTracks(newTracks);
    localStorage.setItem("merlin_playlist_tracks", JSON.stringify(newTracks));
  };

  // Convert YouTube link to embed URL
  const getEmbedUrl = (url: string, playing: boolean, muted: boolean) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    const videoId = match && match[2].length === 11 ? match[2] : null;
    if (!videoId) return "";
    const autoplayParam = playing ? 1 : 0;
    const muteParam = muted ? 1 : 0;
    return `https://www.youtube.com/embed/${videoId}?autoplay=${autoplayParam}&mute=${muteParam}&enablejsapi=1&rel=0`;
  };

  const currentTrack = tracks[currentTrackIndex] || tracks[0];

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

  const handleAddTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUrl.trim() || !newTitle.trim()) return;

    const newTrackItem: Track = {
      id: `custom-${Date.now()}`,
      title: newTitle.trim(),
      artist: newArtist.trim() || "Unknown Artist",
      youtubeUrl: newUrl.trim(),
      duration: newDuration.trim() || "VAR",
      isCustom: true
    };

    const updated = [...tracks, newTrackItem];
    saveTracks(updated);
    setCurrentTrackIndex(updated.length - 1);
    setIsPlaying(true);

    // Reset form
    setNewUrl("");
    setNewTitle("");
    setNewArtist("");
    setNewDuration("");
    setIsAddModalOpen(false);
  };

  const handleDeleteTrack = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (tracks.length <= 1) return; // Keep at least 1 track
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
              Personal audio-visual deck, custom music playlists, and curated video streams.
            </p>
          </header>

          {/* Section Subtitle */}
          <div className={styles.sectionHeaderRow}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titleDot} />
              <span>Audio Deck // Video Stream</span>
            </h2>

            <button 
              onClick={() => setIsAddModalOpen(true)}
              className={styles.addTrackBtn}
            >
              <FiPlus />
              <span>ADD VIDEO TO PLAYLIST</span>
            </button>
          </div>

          {/* Main Music Grid: Video Left | Playlist Right */}
          <div className={styles.musicGrid}>
            
            {/* Left Column: Video Viewport & Controls Bar */}
            <div className={styles.playerColumn}>
              
              {/* Screen Display Frame */}
              <div className={styles.videoScreen}>
                {currentTrack ? (
                  <iframe
                    key={`${currentTrack.id}-${isPlaying}-${isMuted}`}
                    src={getEmbedUrl(currentTrack.youtubeUrl, isPlaying, isMuted)}
                    title={`Video Player - ${currentTrack.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.iframe}
                  />
                ) : (
                  <div className={styles.emptyScreen}>NO VIDEO STREAM SELECTED</div>
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
                  title={isLooping ? "Loop Enabled" : "Loop Disabled"}
                  aria-label="Toggle Loop"
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
                  <FiMusic />
                  <span>PLAYLIST // {tracks.length} ITEMS</span>
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

      {/* Add Track / Upload Modal */}
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
                <h3>UPLOAD / ADD VIDEO TO PLAYLIST</h3>
                <button onClick={() => setIsAddModalOpen(false)} className={styles.modalClose}>
                  <FiX />
                </button>
              </div>

              <form onSubmit={handleAddTrackSubmit} className={styles.modalForm}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>YouTube Video URL *</label>
                  <input
                    type="url"
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    required
                    placeholder="e.g. https://www.youtube.com/watch?v=..."
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Song / Video Title *</label>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    required
                    placeholder="e.g. Cyberpunk Synthwave"
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Artist / Author Name</label>
                  <input
                    type="text"
                    value={newArtist}
                    onChange={(e) => setNewArtist(e.target.value)}
                    placeholder="e.g. Lofi Beats"
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Duration (Optional)</label>
                  <input
                    type="text"
                    value={newDuration}
                    onChange={(e) => setNewDuration(e.target.value)}
                    placeholder="e.g. 3:45"
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
