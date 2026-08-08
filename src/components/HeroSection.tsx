// src/components/HeroSection.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaDiscord, FaDownload, FaArrowRight, FaTrash, FaArrowUp, FaArrowDown, FaUpload } from "react-icons/fa";
import { MdOutlineLocationOn, MdWorkOutline, MdSettings } from "react-icons/md";
import { config } from "@/data/config";
import { photos } from "@/data/photos";
import styles from "./HeroSection.module.css";

const subtitleRoles = ["Cybersecurity Student", "Future Professor", "Developer", "Blue Teamer"];

export default function HeroSection() {
  const names = [config.name, config.nickname];
  const [nameText, setNameText] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [roleIndex, setRoleIndex] = useState(0);

  // Responsive state
  const [windowWidth, setWindowWidth] = useState(1200);

  // Admin and Photo stack management states
  const [isAdmin, setIsAdmin] = useState(false);
  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [photoStack, setPhotoStack] = useState<string[]>([]);

  const checkAdminState = () => {
    setIsAdmin(localStorage.getItem("merlin_admin_logged_in") === "true");
  };

  useEffect(() => {
    checkAdminState();
    window.addEventListener("admin-login-changed", checkAdminState);

    // Sync window width
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Load photo stack from localStorage
    const saved = localStorage.getItem("merlin_hero_photos");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.length > 0) {
          setPhotoStack(parsed);
          return;
        }
      } catch (e) {}
    }
    setPhotoStack(photos.slice(0, 5));

    return () => {
      window.removeEventListener("admin-login-changed", checkAdminState);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Name Typewriter cycle
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentName = names[nameIndex];

    const handleType = () => {
      if (!isDeleting) {
        setNameText(currentName.substring(0, nameText.length + 1));
        if (nameText.length === currentName.length) {
          setTypingSpeed(2000);
          setIsDeleting(true);
        } else {
          setTypingSpeed(120);
        }
      } else {
        setNameText(currentName.substring(0, nameText.length - 1));
        if (nameText.length === 0) {
          setTypingSpeed(500);
          setIsDeleting(false);
          setNameIndex((prev) => (prev + 1) % names.length);
        } else {
          setTypingSpeed(60);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [nameText, isDeleting, nameIndex, typingSpeed]);

  // Subtitle cycle
  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % subtitleRoles.length);
    }, 3000);
    return () => clearInterval(roleTimer);
  }, []);

  const cyclePhotos = () => {
    if (photoStack.length <= 1) return;
    setPhotoStack((prevStack) => {
      const nextStack = [...prevStack];
      const last = nextStack.pop();
      if (last !== undefined) {
        nextStack.unshift(last);
      }
      localStorage.setItem("merlin_hero_photos", JSON.stringify(nextStack));
      return nextStack;
    });
  };

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 80;
    if (Math.abs(info.offset.x) > swipeThreshold || Math.abs(info.offset.y) > swipeThreshold) {
      cyclePhotos();
    }
  };

  const renderSocialIcon = (platform: string, url: string) => {
    const iconsMap: Record<string, any> = {
      github: { icon: FaGithub, style: styles.github },
      linkedin: { icon: FaLinkedin, style: styles.linkedin },
      facebook: { icon: FaFacebook, style: styles.facebook },
      instagram: { icon: FaInstagram, style: styles.instagram },
      discord: { icon: FaDiscord, style: styles.discord }
    };

    const target = iconsMap[platform];
    if (!target) return null;

    const IconComp = target.icon;
    return (
      <a
        key={platform}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.socialIcon} ${target.style}`}
        aria-label={platform}
      >
        <IconComp />
      </a>
    );
  };

  const getImgSrc = (picStr: string) => {
    return picStr.startsWith("data:") ? picStr : `/pics/${picStr}`;
  };

  // Photo management functions
  const handleMoveUp = (idx: number) => {
    if (idx === 0) return;
    const nextStack = [...photoStack];
    const temp = nextStack[idx];
    nextStack[idx] = nextStack[idx - 1];
    nextStack[idx - 1] = temp;
    setPhotoStack(nextStack);
    localStorage.setItem("merlin_hero_photos", JSON.stringify(nextStack));
  };

  const handleMoveDown = (idx: number) => {
    if (idx === photoStack.length - 1) return;
    const nextStack = [...photoStack];
    const temp = nextStack[idx];
    nextStack[idx] = nextStack[idx + 1];
    nextStack[idx + 1] = temp;
    setPhotoStack(nextStack);
    localStorage.setItem("merlin_hero_photos", JSON.stringify(nextStack));
  };

  const handleRemovePhoto = (idx: number) => {
    const nextStack = photoStack.filter((_, i) => i !== idx);
    setPhotoStack(nextStack);
    localStorage.setItem("merlin_hero_photos", JSON.stringify(nextStack));
  };

  const handlePresetSelect = (picName: string) => {
    if (photoStack.includes(picName)) return;
    const nextStack = [...photoStack, picName];
    setPhotoStack(nextStack);
    localStorage.setItem("merlin_hero_photos", JSON.stringify(nextStack));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        const nextStack = [...photoStack, result];
        setPhotoStack(nextStack);
        localStorage.setItem("merlin_hero_photos", JSON.stringify(nextStack));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetPhotos = () => {
    localStorage.removeItem("merlin_hero_photos");
    setPhotoStack(photos.slice(0, 5));
    setIsManagerOpen(false);
  };

  return (
    <section id="home" className={styles.hero}>
      {/* Bulletproof Inline Flex Container */}
      <div 
        className="swiss-container"
        style={{
          display: "flex",
          flexDirection: windowWidth > 768 ? "row" : "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          gap: "4rem"
        }}
      >
        
        {/* Left Info Column */}
        <div className={styles.left} style={{ flex: windowWidth > 768 ? 1.2 : "1 1 auto", width: "100%" }}>
          
          {/* Typewriter Display Name */}
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>
              {nameText}
              <span className={styles.cursor} />
            </h1>
          </div>

          {/* Cycling Subtitle */}
          <div className={styles.subtitle}>
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}
              >
                {subtitleRoles[roleIndex].toUpperCase()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bio text */}
          <p className={styles.bio}>{config.bio}</p>

          {/* Location & Major Meta Info */}
          <div className={styles.metaInfo}>
            <div className={styles.metaItem}>
              <MdOutlineLocationOn style={{ fontSize: "1.1rem" }} />
              <span>{config.location}</span>
            </div>
            <div className={styles.metaItem}>
              <MdWorkOutline style={{ fontSize: "1.1rem" }} />
              <span>{config.education.major}</span>
            </div>
          </div>

          {/* CTAs & Admin Setting Panels */}
          <div className={styles.ctas}>
            <a href="#contact" className={styles.btnPrimary}>
              <span>Hire Me</span>
              <FaArrowRight />
            </a>
            
            {isAdmin ? (
              <button 
                className={styles.btnSecondary} 
                onClick={() => setIsManagerOpen(true)}
                style={{ borderColor: "var(--border)" }}
              >
                <MdSettings />
                <span>Manage Photos</span>
              </button>
            ) : (
              <button 
                className={styles.btnSecondary} 
                onClick={() => alert("CV PDF file will be uploaded here shortly.")}
              >
                <FaDownload />
                <span>Download CV</span>
              </button>
            )}
          </div>

          {/* Social connections */}
          <div className={styles.socialsRow}>
            <span className={styles.socialsLabel}>Network:</span>
            {Object.entries(config.socials).map(([platform, url]) =>
              renderSocialIcon(platform, url)
            )}
          </div>
        </div>

        {/* Right Photo Stack Column */}
        <div 
          className={styles.right} 
          style={{ 
            flex: windowWidth > 768 ? 0.8 : "1 1 auto",
            width: "100%",
            display: "flex",
            justifyContent: "center"
          }}
        >
          {photoStack.length > 0 ? (
            <div className={styles.photoStackContainer}>
              {photoStack.map((pic, idx) => {
                const rotateOffsets = [-6, -3, 0, 3, 6];
                const rotateDeg = rotateOffsets[idx % rotateOffsets.length];
                const topIdxVal = photoStack.length - 1;
                const isTop = idx === topIdxVal;

                return (
                  <motion.div
                    key={idx}
                    drag={isTop}
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    dragElastic={0.7}
                    onDragEnd={handleDragEnd}
                    onTap={isTop ? cyclePhotos : undefined}
                    onClick={() => {
                      if (isTop) cyclePhotos();
                    }}
                    className={styles.photoCard}
                    style={{
                      zIndex: isTop ? 100 : idx,
                      rotate: isTop ? 0 : rotateDeg,
                      scale: isTop ? 1 : 0.95 - (topIdxVal - idx) * 0.02,
                      x: isTop ? 0 : (idx - topIdxVal) * 8,
                      y: isTop ? 0 : (idx - topIdxVal) * 4,
                      cursor: isTop ? "grab" : "default"
                    }}
                    whileTap={isTop ? { scale: 1.02 } : {}}
                  >
                    <Image
                      src={getImgSrc(pic)}
                      alt={`Merlin visual stack ${idx + 1}`}
                      className={styles.photoCardImg}
                      width={300}
                      height={400}
                      unoptimized={pic.startsWith("data:")}
                    />
                  </motion.div>
                );
              })}
              <div className={styles.counter}>
                TAP OR DRAG PHOTO TO CYCLE //
              </div>
            </div>
          ) : (
            <div style={{ fontFamily: "var(--font-mono)", color: "var(--muted)", fontSize: "0.85rem" }}>
              NO PHOTO LOADED //
            </div>
          )}
        </div>
      </div>

      {/* Admin Photo Manager Panel Modal */}
      {isManagerOpen && (
        <div className={styles.managerOverlay}>
          <div className={styles.managerModal}>
            <div className={styles.managerHeader}>
              <h3>MANAGE HERO PHOTOS //</h3>
              <button onClick={() => setIsManagerOpen(false)} style={{ fontSize: "1.2rem", fontWeight: 700 }}>✕</button>
            </div>
            
            <div className={styles.managerBody}>
              
              {/* Stack List */}
              <div className={styles.managerSection}>
                <h4>Active Stack Array ({photoStack.length} items)</h4>
                <div className={styles.managerList}>
                  {photoStack.map((pic, idx) => (
                    <div key={idx} className={styles.managerItem}>
                      <div className={styles.managerThumb}>
                        <img src={getImgSrc(pic)} alt="thumb" />
                      </div>
                      <div className={styles.managerLabel}>
                        {pic.startsWith("data:") ? "Uploaded Image" : pic}
                      </div>
                      <div className={styles.managerActions}>
                        <button disabled={idx === 0} onClick={() => handleMoveUp(idx)}><FaArrowUp /></button>
                        <button disabled={idx === photoStack.length - 1} onClick={() => handleMoveDown(idx)}><FaArrowDown /></button>
                        <button onClick={() => handleRemovePhoto(idx)} style={{ color: "#ff5f56" }}><FaTrash /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upload & Add presets */}
              <div className={styles.managerSection}>
                <h4>Add Photo Controls</h4>
                <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                  <label className={styles.uploadBtn}>
                    <FaUpload />
                    <span>Upload Image</span>
                    <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} />
                  </label>
                  
                  <button className={styles.resetBtn} onClick={handleResetPhotos}>
                    Reset Default 5 Stack
                  </button>
                </div>

                <h4>Available Preset Images</h4>
                <div className={styles.presetsGrid}>
                  {photos.map((picName) => {
                    const active = photoStack.includes(picName);
                    return (
                      <div 
                        key={picName} 
                        onClick={() => !active && handlePresetSelect(picName)}
                        className={`${styles.presetThumb} ${active ? styles.presetActive : ""}`}
                        title={active ? "Already in stack" : "Add to stack"}
                      >
                        <img src={`/pics/${picName}`} alt="preset" />
                        <span className={styles.presetOverlay}>{active ? "ADDED" : "+"}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
