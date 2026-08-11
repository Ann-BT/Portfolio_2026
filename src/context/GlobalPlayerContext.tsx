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
    artist: "Chill Beats",
    src: "/media/meaningful_love.mp4?v=2",
    duration: "3:42"
  },
  {
    id: "v2",
    title: "Shut Up My Mom's Calling",
    artist: "Hotel Ugly",
    src: "/media/shutup_my_moms_calling.mp4?v=2",
    duration: "2:45"
  },
  {
    id: "v3",
    title: "505",
    artist: "Arctic Monkeys",
    src: "/media/505.mp4?v=2",
    duration: "4:13"
  },
  {
    id: "v4",
    title: "Airplane Mode",
    artist: "Limbo",
    src: "/media/airplane_mode.mp4?v=2",
    duration: "2:30"
  },
  {
    id: "v5",
    title: "Duvet",
    artist: "Bôa",
    src: "/media/boa_duvet.mp4?v=2",
    duration: "3:24"
  },
  {
    id: "v6",
    title: "Bunny Girl",
    artist: "1nonly",
    src: "/media/bunny_girl.mp4?v=2",
    duration: "2:15"
  },
  {
    id: "v7",
    title: "Tek It (Sped Up)",
    artist: "Cafuné",
    src: "/media/cafune_tek_it.mp4?v=2",
    duration: "2:50"
  },
  {
    id: "v8",
    title: "Dark Red",
    artist: "Steve Lacy",
    src: "/media/dark_red.mp4?v=2",
    duration: "2:53"
  },
  {
    id: "v9",
    title: "Babydoll",
    artist: "Dominic Fike",
    src: "/media/babydoll.mp4?v=2",
    duration: "1:39"
  },
  {
    id: "v10",
    title: "Exit Music (For A Film)",
    artist: "Radiohead",
    src: "/media/exit_music.mp4?v=2",
    duration: "4:24"
  },
  {
    id: "v11",
    title: "Heart To Heart",
    artist: "Mac DeMarco",
    src: "/media/heart_to_heart.mp4?v=2",
    duration: "3:31"
  },
  {
    id: "v12",
    title: "Notion",
    artist: "The Rare Occasions",
    src: "/media/notion.mp4?v=2",
    duration: "3:15"
  },
  {
    id: "v13",
    title: "Tell Me You Like It",
    artist: "POODEE",
    src: "/media/poodee_tell_me.mp4?v=2",
    duration: "2:40"
  },
  {
    id: "v14",
    title: "Stay With Me",
    artist: "Miki Matsubara",
    src: "/media/stay_with_me.mp4?v=2",
    duration: "4:34"
  },
  {
    id: "v15",
    title: "Telephones",
    artist: "Vacations",
    src: "/media/telephones.mp4?v=2",
    duration: "3:40"
  },
  {
    id: "v16",
    title: "Zodiac Killer",
    artist: "Khalil?",
    src: "/media/zodiac_killer.mp4?v=2",
    duration: "2:05"
  },
  {
    id: "v17",
    title: "the perfect pair",
    artist: "beabadoobee",
    src: "/media/the_perfect_pair.mp4?v=2",
    duration: "2:57"
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
  masterMediaRef: React.RefObject<HTMLVideoElement | null>;
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
  const [volume, setVolumeState] = useState<number>(5); // Default 5% volume
  const [loopMode, setLoopMode] = useState<LoopMode>("all");
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isMiniDismissed, setIsMiniDismissed] = useState<boolean>(false);

  const masterMediaRef = useRef<HTMLVideoElement | null>(null);

  // Load custom playlist from localStorage & merge with initialVideoTracks
  useEffect(() => {
    const saved = localStorage.getItem("merlin_local_playlist");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Keep initial tracks and append any custom user-uploaded tracks
          const customOnly = parsed.filter((t: VideoTrack) => t.isCustom);
          const combined = [...initialVideoTracks, ...customOnly];
          setTracks(combined);
          localStorage.setItem("merlin_local_playlist", JSON.stringify(combined));
          return;
        }
      } catch (e) {
        // Fallback
      }
    }
    setTracks(initialVideoTracks);
  }, []);

  const saveTracks = (newTracks: VideoTrack[]) => {
    setTracks(newTracks);
    localStorage.setItem("merlin_local_playlist", JSON.stringify(newTracks));
  };

  const currentTrack = tracks[currentTrackIndex] || tracks[0];

  // Sync master media properties with React state
  useEffect(() => {
    if (!masterMediaRef.current) return;
    masterMediaRef.current.volume = volume / 100;
    masterMediaRef.current.muted = isMuted;

    if (isPlaying) {
      const playPromise = masterMediaRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => setIsPlaying(false));
      }
    } else {
      masterMediaRef.current.pause();
    }
  }, [isPlaying, currentTrackIndex, volume, isMuted]);

  const handleTimeUpdate = () => {
    if (masterMediaRef.current) {
      setCurrentTime(masterMediaRef.current.currentTime);
      setDuration(masterMediaRef.current.duration || 0);
    }
  };

  const handleVideoEnded = () => {
    if (loopMode === "one") {
      if (masterMediaRef.current) {
        masterMediaRef.current.currentTime = 0;
        masterMediaRef.current.play();
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
    if (masterMediaRef.current) {
      masterMediaRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

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
        masterMediaRef,
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

      {/* 
        MASTER PERSISTENT MEDIA ENGINE (Hidden in App Root)
        Plays audio/video continuously across ALL page transitions without unmounting!
      */}
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
            ref={masterMediaRef}
            src={currentTrack.src}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleVideoEnded}
            preload="auto"
          />
        )}
      </div>

      {/* Floating Persistent Mini Player with Volume Control when navigating to other pages */}
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

            {/* Cross-Page Music Playback Volume Control */}
            <div className={styles.miniVolumeGroup}>
              <button onClick={toggleMute} className={styles.miniBtn} title={isMuted ? "Unmute" : "Mute"}>
                {isMuted ? <FiVolumeX /> : <FiVolume2 />}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={isMuted ? 0 : volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className={styles.miniVolumeSlider}
                aria-label="Cross-page Volume Slider"
              />
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
