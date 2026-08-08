// src/app/interests/page.tsx
"use client";

import { useState } from "react";
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
  FiX,
  FiMoreVertical
} from "react-icons/fi";
import Footer from "@/components/Footer";
import { useGlobalPlayer, VideoTrack } from "@/context/GlobalPlayerContext";
import styles from "./Interests.module.css";

export default function InterestsPage() {
  const {
    tracks,
    currentTrackIndex,
    currentTrack,
    isPlaying,
    isMuted,
    volume,
    loopMode,
    currentTime,
    duration,
    videoRef,
    togglePlay,
    toggleMute,
    setVolume,
    cycleLoopMode,
    nextTrack,
    prevTrack,
    selectTrack,
    addTrack,
    deleteTrack,
    seek
  } = useGlobalPlayer();

  // Upload modal state
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [uploadType, setUploadType] = useState<"file" | "url">("file");
  const [newFile, setNewFile] = useState<File | null>(null);
  const [newUrl, setNewUrl] = useState<string>("");
  const [newTitle, setNewTitle] = useState<string>("");
  const [newArtist, setNewArtist] = useState<string>("");

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    seek(Number(e.target.value));
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

          addTrack(newTrackItem);
          resetForm();
        }
      };
      reader.readAsDataURL(newFile);
      return;
    } else if (uploadType === "url" && newUrl.trim()) {
      const newTrackItem: VideoTrack = {
        id: `custom-${Date.now()}`,
        title: newTitle.trim(),
        artist: newArtist.trim() || "Local Media",
        src: newUrl.trim(),
        duration: "MEDIA",
        isCustom: true
      };

      addTrack(newTrackItem);
      resetForm();
    }
  };

  const resetForm = () => {
    setNewFile(null);
    setNewUrl("");
    setNewTitle("");
    setNewArtist("");
    setIsAddModalOpen(false);
  };

  const getLoopModeLabel = () => {
    if (loopMode === "one") return "Loop 1 Song";
    if (loopMode === "all") return "Loop All Playlist";
    return "Loop Off";
  };

  return (
    <>
      <section className={styles.interestsPage}>
        <div className={styles.youtubeContainer}>
          
          {/* Main YouTube Layout: Video Player (Left) | Playlist Drawer (Right) */}
          <div className={styles.youtubeLayout}>
            
            {/* LEFT COLUMN: Main Video Player & Title */}
            <div className={styles.mainVideoArea}>
              
              {/* 16:9 Video Player Container */}
              <div className={styles.playerFrame}>
                <div id="player-frame-anchor" className={styles.playerAnchor} />
                {!currentTrack && <div className={styles.emptyScreen}>No Video Selected</div>}
              </div>

              {/* Video Title & Author Row */}
              <div className={styles.videoMetaInfo}>
                <h1 className={styles.videoMainTitle}>{currentTrack?.title}</h1>
                <div className={styles.videoAuthorRow}>
                  <div className={styles.authorBadge}>{currentTrack?.artist}</div>
                  
                  {/* Quick Player Controls (Prev, Play/Pause, Next, Loop Mode) */}
                  <div className={styles.quickControls}>
                    <button onClick={prevTrack} className={styles.iconBtn} title="Previous Track">
                      <FiSkipBack />
                    </button>
                    <button onClick={togglePlay} className={`${styles.iconBtn} ${styles.playAccentBtn}`} title={isPlaying ? "Pause" : "Play"}>
                      {isPlaying ? <FiPause /> : <FiPlay />}
                    </button>
                    <button onClick={nextTrack} className={styles.iconBtn} title="Next Track">
                      <FiSkipForward />
                    </button>

                    {/* Loop mode toggle */}
                    <button 
                      onClick={cycleLoopMode} 
                      className={`${styles.iconBtn} ${loopMode !== "none" ? styles.activeLoopBtn : ""}`}
                      title={`Loop Mode: ${getLoopModeLabel()}`}
                    >
                      <FiRepeat />
                      {loopMode === "one" && <span className={styles.loopOneBadge}>1</span>}
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: YouTube Style Playlist Panel */}
            <div className={styles.playlistDrawer}>
              
              {/* Playlist Header */}
              <div className={styles.playlistHeader}>
                <div className={styles.playlistTitleGroup}>
                  <h2 className={styles.playlistHeading}>Merlin&apos;s Media Playlist</h2>
                  <span className={styles.playlistSubtext}>
                    {tracks.length} videos • Playing {(currentTrackIndex + 1)} of {tracks.length} ({getLoopModeLabel()})
                  </span>
                </div>

                <div className={styles.headerActions}>
                  <button 
                    onClick={() => setIsAddModalOpen(true)}
                    className={styles.addVideoIconBtn}
                    title="Add Video to Playlist"
                  >
                    <FiPlus size={18} />
                  </button>
                  <FiMoreVertical className={styles.moreIcon} />
                </div>
              </div>

              {/* Scrollable Playlist Items */}
              <div className={styles.playlistItemsList}>
                {tracks.map((track, idx) => {
                  const isActive = idx === currentTrackIndex;
                  return (
                    <div
                      key={track.id}
                      onClick={() => selectTrack(idx)}
                      className={`${styles.ytPlaylistItem} ${isActive ? styles.ytActiveItem : ""}`}
                    >
                      {/* Video Thumbnail Box */}
                      <div className={styles.thumbWrapper}>
                        <video src={track.src} className={styles.thumbVideoPreview} preload="metadata" />
                        
                        {/* Play overlay / Icon */}
                        {isActive && (
                          <div className={styles.thumbOverlay}>
                            <FiPlay size={14} className={styles.playingIndicator} />
                          </div>
                        )}

                        {/* Duration Badge */}
                        <span className={styles.durationBadge}>
                          {track.duration || "0:00"}
                        </span>
                      </div>

                      {/* Video Info (Title & Author) */}
                      <div className={styles.itemMeta}>
                        <h4 className={styles.itemTitle}>{track.title}</h4>
                        <span className={styles.itemAuthor}>{track.artist}</span>
                      </div>

                      {/* Delete Action */}
                      {tracks.length > 1 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteTrack(track.id);
                          }}
                          className={styles.itemDeleteBtn}
                          title="Remove from playlist"
                        >
                          <FiTrash2 size={14} />
                        </button>
                      )}
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
                <h3>ADD VIDEO TO PLAYLIST</h3>
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
