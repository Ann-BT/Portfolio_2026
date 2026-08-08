// src/app/interests/page.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight, FiPlay, FiBookOpen } from "react-icons/fi";
import { novels, manga, musicTracks } from "@/data/interests";
import { photos } from "@/data/photos";
import Footer from "@/components/Footer";
import styles from "./Interests.module.css";

export default function InterestsPage() {
  const [activeFlippedCard, setActiveFlippedCard] = useState<string | null>(null);
  const [selectedTrack, setSelectedTrack] = useState(musicTracks[0]);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImg(null);
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  // Convert YouTube links to embed format
  const getEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    const videoId = match && match[2].length === 11 ? match[2] : null;
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : "";
  };

  const handleOpenLightbox = (imgName: string, idx: number) => {
    setLightboxImg(imgName);
    setLightboxIndex(idx);
  };

  const handleNextImage = () => {
    if (lightboxIndex === -1) return;
    const nextIdx = (lightboxIndex + 1) % photos.length;
    setLightboxImg(photos[nextIdx]);
    setLightboxIndex(nextIdx);
  };

  const handlePrevImage = () => {
    if (lightboxIndex === -1) return;
    const prevIdx = (lightboxIndex - 1 + photos.length) % photos.length;
    setLightboxImg(photos[prevIdx]);
    setLightboxIndex(prevIdx);
  };

  return (
    <>
      <section className={styles.interestsPage}>
        <div className="swiss-container">
          
          {/* Header */}
          <header className={styles.header}>
            <h1 className={styles.title}>The Vault</h1>
            <p className={styles.subtitle}>
              An encrypted catalog of my off-duty interests, visual gallery collections, novels, and music playlists.
            </p>
          </header>

          {/* 1. Novels & Manga Section */}
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleDot} />
            <span>Read Log (Novels & Manga)</span>
          </h2>
          <div className={styles.readGrid}>
            {/* Render Novels */}
            {novels.map((novel, idx) => (
              <div 
                key={novel.title} 
                className={styles.readCard}
                onClick={() => setActiveFlippedCard(activeFlippedCard === `novel-${idx}` ? null : `novel-${idx}`)}
              >
                <div className={`${styles.cardInner} ${activeFlippedCard === `novel-${idx}` ? styles.flipped : ""}`}>
                  <div className={styles.faceFront}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <FiBookOpen size={20} />
                      <span className={styles.badge}>{novel.status.toUpperCase()}</span>
                    </div>
                    <div>
                      <h3 className={styles.cardTitle}>{novel.title}</h3>
                      <div className={styles.author}>{novel.author}</div>
                    </div>
                    <div className={styles.statusRow}>
                      <span className={styles.progressText}>{novel.progress}</span>
                    </div>
                  </div>
                  <div className={styles.faceBack}>
                    <div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--muted)", marginBottom: "0.5rem" }}>
                        NOVEL_REVIEW //
                      </div>
                      <p style={{ fontSize: "0.85rem", lineHeight: 1.5, color: "var(--text)" }}>{novel.note}</p>
                    </div>
                    <span className={styles.progressText}>{novel.progress}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Render Manga */}
            {manga.map((item, idx) => (
              <div 
                key={item.title} 
                className={styles.readCard}
                onClick={() => setActiveFlippedCard(activeFlippedCard === `manga-${idx}` ? null : `manga-${idx}`)}
              >
                <div className={`${styles.cardInner} ${activeFlippedCard === `manga-${idx}` ? styles.flipped : ""}`}>
                  <div className={styles.faceFront}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <FiPlay size={20} />
                      <span className={styles.badge}>{item.status.toUpperCase()}</span>
                    </div>
                    <div>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <div className={styles.author}>{item.author}</div>
                    </div>
                    <div className={styles.statusRow}>
                      <span className={styles.progressText}>{item.progress}</span>
                    </div>
                  </div>
                  <div className={styles.faceBack}>
                    <div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--muted)", marginBottom: "0.5rem" }}>
                        MANGA_REVIEW //
                      </div>
                      <p style={{ fontSize: "0.85rem", lineHeight: 1.5, color: "var(--text)" }}>{item.note}</p>
                    </div>
                    <span className={styles.progressText}>{item.progress}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 2. Listen / Music Section */}
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleDot} />
            <span>Sound Waves (Music Playlist)</span>
          </h2>
          <div className={styles.musicGrid}>
            {/* Track selector list */}
            <div className={styles.trackList}>
              {musicTracks.map((track) => (
                <div
                  key={track.title}
                  onClick={() => setSelectedTrack(track)}
                  className={`${styles.trackRow} ${
                    selectedTrack.title === track.title ? styles.activeTrack : ""
                  }`}
                >
                  <div className={styles.trackInfo}>
                    <span className={styles.trackTitle}>{track.title}</span>
                    <span className={styles.artist}>{track.artist}</span>
                  </div>
                  <span className={styles.playIcon}>
                    <FiPlay />
                  </span>
                </div>
              ))}
            </div>

            {/* Embedded YouTube Media Player */}
            <div className={styles.playerBox}>
              {selectedTrack ? (
                <iframe
                  className={styles.iframeWrapper}
                  src={getEmbedUrl(selectedTrack.youtubeUrl)}
                  title={`YouTube video player - ${selectedTrack.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ border: "none" }}
                />
              ) : (
                <div style={{ fontFamily: "var(--font-mono)", color: "var(--muted)", fontSize: "0.9rem" }}>
                  SELECT TRACK // LAUNCH PLAYER
                </div>
              )}
            </div>
          </div>

          {/* 3. Visual Gallery Section */}
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleDot} />
            <span>Image Capture Decryption (Gallery)</span>
          </h2>
          <div className={styles.galleryGrid}>
            {photos.map((pic, idx) => (
              <div
                key={pic}
                onClick={() => handleOpenLightbox(pic, idx)}
                className={styles.galleryCard}
              >
                <Image
                  src={`/pics/${pic}`}
                  alt="Gallery visual snap"
                  className={styles.galleryImg}
                  width={250}
                  height={240}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Gallery Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.lightboxOverlay}
            onClick={() => setLightboxImg(null)}
          >
            {/* Close */}
            <button 
              className={styles.closeBtn} 
              onClick={() => setLightboxImg(null)}
              aria-label="Close lightbox overlay"
            >
              <FiX />
            </button>

            {/* Prev Image */}
            <button
              className={`${styles.navArrow} ${styles.arrowLeft}`}
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              aria-label="Previous image"
            >
              <FiChevronLeft />
            </button>

            {/* Image Wrapper */}
            <div className={styles.lightboxWrapper} onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={lightboxImg}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={`/pics/${lightboxImg}`}
                alt="Enlarged visual"
                className={styles.lightboxImg}
              />
            </div>

            {/* Next Image */}
            <button
              className={`${styles.navArrow} ${styles.arrowRight}`}
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              aria-label="Next image"
            >
              <FiChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
