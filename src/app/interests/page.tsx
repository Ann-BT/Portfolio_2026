// src/app/interests/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiPlay, 
  FiPause, 
  FiSkipBack, 
  FiSkipForward, 
  FiRepeat, 
  FiVolume2,
  FiVolumeX,
  FiPlus, 
  FiTrash2, 
  FiVideo, 
  FiUploadCloud,
  FiX,
  FiMoreVertical,
  FiBookOpen,
  FiStar,
  FiBookmark
} from "react-icons/fi";
import Footer from "@/components/Footer";
import { useGlobalPlayer, VideoTrack } from "@/context/GlobalPlayerContext";
import { bookRecommendations, BookRecommendation } from "@/data/interests";
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
    masterMediaRef,
    togglePlay,
    toggleMute,
    setVolume,
    cycleLoopMode,
    nextTrack,
    prevTrack,
    selectTrack,
    addTrack,
    deleteTrack
  } = useGlobalPlayer();

  const visualVideoRef = useRef<HTMLVideoElement | null>(null);

  // Sync visual video time & state with master background media engine
  useEffect(() => {
    const syncMedia = () => {
      if (visualVideoRef.current && masterMediaRef.current) {
        if (Math.abs(visualVideoRef.current.currentTime - masterMediaRef.current.currentTime) > 0.5) {
          visualVideoRef.current.currentTime = masterMediaRef.current.currentTime;
        }
        if (isPlaying && visualVideoRef.current.paused) {
          visualVideoRef.current.play().catch(() => {});
        } else if (!isPlaying && !visualVideoRef.current.paused) {
          visualVideoRef.current.pause();
        }
      }
    };

    const interval = setInterval(syncMedia, 250);
    return () => clearInterval(interval);
  }, [isPlaying, currentTrackIndex, masterMediaRef]);

  // Upload modal state
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [uploadType, setUploadType] = useState<"file" | "url">("file");
  const [newFile, setNewFile] = useState<File | null>(null);
  const [newUrl, setNewUrl] = useState<string>("");
  const [newTitle, setNewTitle] = useState<string>("");
  const [newArtist, setNewArtist] = useState<string>("");

  // Book Category Filter state
  const [bookFilter, setBookFilter] = useState<string>("ALL");

  const filteredBooks = bookRecommendations.filter((book) => {
    if (bookFilter === "ALL") return true;
    if (bookFilter === "NOVELS") return book.category === "Novel";
    if (bookFilter === "MANHWA") return book.category === "Manhwa";
    if (bookFilter === "MANGA") return book.category === "Manga";
    if (bookFilter === "MANHUA") return book.category === "Manhua";
    return true;
  });

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
          
          {/* Main Top Title Text requested by user */}
          <header className={styles.topHeader}>
            <span className={styles.topHeaderTag}>// AUDIO STREAM & EXPLORATION</span>
            <h1 className={styles.mainTitleText}>Play some music and explore my page</h1>
            <p className={styles.headerSubtitle}>
              Curated local media deck, persistent background audio streams, and personal reading recommendations.
            </p>
          </header>

          {/* Main YouTube Layout: Video Player (Left) | Playlist Drawer (Right) */}
          <div className={styles.youtubeLayout}>
            
            {/* LEFT COLUMN: Main Video Player & Title */}
            <div className={styles.mainVideoArea}>
              
              {/* 16:9 Video Player Container (Clean without default browser control bar) */}
              <div className={styles.playerFrame}>
                {currentTrack ? (
                  <video
                    ref={visualVideoRef}
                    key={currentTrack.id}
                    src={currentTrack.src}
                    muted
                    onClick={togglePlay}
                    className={styles.videoPlayer}
                  />
                ) : (
                  <div className={styles.emptyScreen}>No Video Selected</div>
                )}
              </div>

              {/* Video Title & Author Row */}
              <div className={styles.videoMetaInfo}>
                <h2 className={styles.videoMainTitle}>{currentTrack?.title}</h2>
                <div className={styles.videoAuthorRow}>
                  <div className={styles.authorBadge}>{currentTrack?.artist}</div>
                  
                  {/* Quick Player Controls (Prev, Play/Pause, Next, Loop Mode & Volume Slider) */}
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

                    {/* Volume Mute & Slider */}
                    <div className={styles.volumeBlock}>
                      <button onClick={toggleMute} className={styles.iconBtn} title={isMuted ? "Unmute" : "Mute"}>
                        {isMuted ? <FiVolumeX /> : <FiVolume2 />}
                      </button>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={isMuted ? 0 : volume}
                        onChange={(e) => setVolume(Number(e.target.value))}
                        className={styles.volumeRange}
                        aria-label="Volume Slider"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: YouTube Style Playlist Panel */}
            <div className={styles.playlistDrawer}>
              
              {/* Playlist Header */}
              <div className={styles.playlistHeader}>
                <div className={styles.playlistTitleGroup}>
                  <h3 className={styles.playlistHeading}>Merlin&apos;s Media Playlist</h3>
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

          {/* ========================================================= */}
          {/* NOVEL & MANGA / MANHWA / MANHUA RECOMMENDATIONS SHOWCASE  */}
          {/* ========================================================= */}
          <section className={styles.booksSection}>
            
            {/* Section Heading & Filter Bar */}
            <div className={styles.booksHeaderRow}>
              <div>
                <span className={styles.booksSectionTag}>// READING SHELF & RECOMMENDATIONS</span>
                <h2 className={styles.booksSectionTitle}>Light Novels & Manga / Manhwa / Manhua</h2>
              </div>

              {/* Filter Tabs */}
              <div className={styles.booksFilterBar}>
                {["ALL", "NOVELS", "MANHWA", "MANGA", "MANHUA"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setBookFilter(filter)}
                    className={`${styles.booksFilterBtn} ${bookFilter === filter ? styles.activeBooksFilter : ""}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Book Covers List Grid Showcase */}
            <div className={styles.booksGrid}>
              {filteredBooks.map((book) => (
                <motion.div
                  key={book.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className={styles.bookCard}
                >
                  {/* Book Cover Image Container */}
                  <div className={styles.coverFrame}>
                    <img 
                      src={book.coverImage} 
                      alt={book.title} 
                      className={styles.coverImage}
                    />
                    
                    {/* Category Badge */}
                    <span className={styles.categoryBadge}>
                      {book.category.toUpperCase()}
                    </span>

                    {/* Overlay info on hover */}
                    <div className={styles.coverOverlay}>
                      <div className={styles.overlayText}>{book.description}</div>
                      {book.chapters && (
                        <span className={styles.chaptersBadge}>
                          <FiBookmark /> {book.chapters}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Book Details */}
                  <div className={styles.bookDetails}>
                    <h3 className={styles.bookTitle}>{book.title}</h3>
                    <div className={styles.bookAuthor}>{book.author}</div>

                    {/* Status Badge & Tags */}
                    <div className={styles.bookFooter}>
                      <span className={`${styles.statusBadge} ${
                        book.status === "Completed" 
                          ? styles.statusCompleted 
                          : book.status === "Ongoing" || book.status === "Reading"
                          ? styles.statusOngoing 
                          : styles.statusRecommended
                      }`}>
                        {book.status}
                      </span>
                      <div className={styles.tagsGroup}>
                        {book.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className={styles.bookTag}>#{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </section>

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
