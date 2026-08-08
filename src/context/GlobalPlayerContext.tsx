// src/context/GlobalPlayerContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiPlay, 
  FiPause, 
  FiSkipBack, 
  FiSkipForward, 
  FiVolume2, 
  FiVolumeX, 
  FiRepeat, 
  FiMaximize2,
  FiX
} from "react-icons/fi";
import styles from "./GlobalPlayer.module.css";

export type LoopMode = "all" | "one" | "none";

export interface VideoTrack {
  id: string;
  title: string;
  artist: string;
  src: string;
  duration?: string;
  thumbnail?: string;
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

interface PlayerContextType {
  tracks: VideoTrack[];
  currentTrackIndex: number;
  currentTrack: VideoTrack;
  isPlaying: boolean;
  isMuted: boolean;
  volume: number; // 0 - 100
  loopMode: LoopMode;
  currentTime: number;
  duration: number;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  togglePlay: () => void;
  toggleMute: () => void;
  setVolume: (val: number) => void;
  cycleLoopMode: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  selectTrack: (index: number) => void;
  addTrack: (track: VideoTrack) => void;
  deleteTrack: (id: string) => void;
  seek: (time: number) => void;
}

const GlobalPlayerContext = createContext<PlayerContextType | null>(null);

export function GlobalPlayerProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [tracks, setTracks] = useState<VideoTrack[]>(initialVideoTracks);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolumeState] = useState<number>(25); // Default 25% lower volume
  const [loopMode, setLoopMode] = useState<LoopMode>("all");
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isMiniDismissed, setIsMiniDismissed] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

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
        // Fallback
      }
    }
  }, []);

  const saveTracks = (newTracks: VideoTrack[]) => {
    setTracks(newTracks);
    localStorage.setItem("merlin_local_playlist", JSON.stringify(newTracks));
  };

  const currentTrack = tracks[currentTrackIndex] || tracks[0];

  // Sync video element properties with React state
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
    if (loopMode === "one") {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    } else if (loopMode === "all") {
      nextTrack();
    } else {
      setIsPlaying(false);
    }
  };

  const togglePlay = () => setIsPlaying((prev) => !prev);
  const toggleMute = () => setIsMuted((prev) => !prev);
  const setVolume = (val: number) => {
    setVolumeState(val);
    if (val > 0 && isMuted) setIsMuted(false);
  };

  const cycleLoopMode = () => {
    setLoopMode((prev) => {
      if (prev === "all") return "one";
      if (prev === "one") return "none";
      return "all";
    });
  };

  const nextTrack = () => {
    if (tracks.length === 0) return;
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    if (tracks.length === 0) return;
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setIsPlaying(true);
  };

  const selectTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  const addTrack = (newTrack: VideoTrack) => {
    const updated = [...tracks, newTrack];
    saveTracks(updated);
    setCurrentTrackIndex(updated.length - 1);
    setIsPlaying(true);
  };

  const deleteTrack = (id: string) => {
    if (tracks.length <= 1) return;
    const updated = tracks.filter((t) => t.id !== id);
    saveTracks(updated);
    if (currentTrackIndex >= updated.length) {
      setCurrentTrackIndex(0);
    }
  };

  const seek = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  // Show floating mini-player if NOT on /interests page AND music/video is playing
  const isInterestsPage = pathname === "/interests";
  const showMiniPlayer = !isInterestsPage && isPlaying && !isMiniDismissed;

  return (
    <GlobalPlayerContext.Provider
      value={{
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
      }}
    >
      {children}

      {/* Hidden Global Video Node — strictly maintained across routes */}
      <div 
        style={{ 
          position: "fixed", 
          top: -9999, 
          left: -9999, 
          width: 1, 
          height: 1, 
          opacity: 0, 
          pointerEvents: "none" 
        }}
      >
        {currentTrack && (
          <video
            ref={videoRef}
            src={currentTrack.src}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleVideoEnded}
            preload="auto"
          />
        )}
      </div>

      {/* Floating Persistent Mini Player when navigating to other pages */}
      <AnimatePresence>
        {showMiniPlayer && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className={styles.miniPlayerBar}
          >
            <div className={styles.miniTrackInfo}>
              <div className={styles.miniEq}>
                <span className={styles.miniEqBar} style={{ animationDelay: "0s" }} />
                <span className={styles.miniEqBar} style={{ animationDelay: "0.2s" }} />
                <span className={styles.miniEqBar} style={{ animationDelay: "0.4s" }} />
              </div>
              <div className={styles.miniMeta}>
                <div className={styles.miniTitle}>{currentTrack?.title}</div>
                <div className={styles.miniArtist}>{currentTrack?.artist}</div>
              </div>
            </div>

            <div className={styles.miniControls}>
              <button onClick={prevTrack} className={styles.miniBtn} title="Previous">
                <FiSkipBack />
              </button>
              <button onClick={togglePlay} className={`${styles.miniBtn} ${styles.miniPlayBtn}`} title={isPlaying ? "Pause" : "Play"}>
                {isPlaying ? <FiPause /> : <FiPlay />}
              </button>
              <button onClick={nextTrack} className={styles.miniBtn} title="Next">
                <FiSkipForward />
              </button>

              <button 
                onClick={cycleLoopMode} 
                className={`${styles.miniBtn} ${loopMode !== "none" ? styles.activeLoop : ""}`}
                title={loopMode === "one" ? "Loop Single" : loopMode === "all" ? "Loop All" : "Loop Off"}
              >
                <FiRepeat />
                {loopMode === "one" && <span className={styles.miniBadge}>1</span>}
              </button>
            </div>

            <div className={styles.miniRightActions}>
              <Link href="/interests" className={styles.miniMaximizeBtn} title="Open Interests Player">
                <FiMaximize2 />
              </Link>
              <button onClick={() => setIsMiniDismissed(true)} className={styles.miniCloseBtn} title="Hide Mini Player">
                <FiX />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlobalPlayerContext.Provider>
  );
}

export function useGlobalPlayer() {
  const context = useContext(GlobalPlayerContext);
  if (!context) {
    throw new Error("useGlobalPlayer must be used within a GlobalPlayerProvider");
  }
  return context;
}
