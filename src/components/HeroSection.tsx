// src/components/HeroSection.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaDiscord, FaYoutube, FaDownload, FaArrowRight } from "react-icons/fa";
import { MdOutlineLocationOn, MdWorkOutline } from "react-icons/md";
import { config } from "@/data/config";
import { photos } from "@/data/photos";
import styles from "./HeroSection.module.css";

const subtitleRoles = ["Cybersecurity Student", "Future Professor", "Developer", "Blue Teamer"];

export default function HeroSection() {
  // Name typewriter variables
  const names = [config.name, config.nickname];
  const [nameText, setNameText] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Subtitle role cycling variables
  const [roleIndex, setRoleIndex] = useState(0);

  // Photo stack variables
  const [photoStack, setPhotoStack] = useState(photos.slice(0, 5));
  const [topIndex, setTopIndex] = useState(4); // 0-indexed index of top card in local render list

  // Sudo typewriter logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentName = names[nameIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setNameText(currentName.substring(0, nameText.length + 1));
        
        if (nameText.length === currentName.length) {
          // Completed typing, pause for 2s
          setTypingSpeed(2000);
          setIsDeleting(true);
        } else {
          setTypingSpeed(120);
        }
      } else {
        // Deleting
        setNameText(currentName.substring(0, nameText.length - 1));
        
        if (nameText.length === 0) {
          // Completed deleting, pause for 0.5s
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

  // Subtitle role cycle logic
  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % subtitleRoles.length);
    }, 3000);
    return () => clearInterval(roleTimer);
  }, []);

  // Cycle photo stack (move front to back)
  const cyclePhotos = () => {
    setPhotoStack((prevStack) => {
      const nextStack = [...prevStack];
      const first = nextStack.shift();
      if (first) nextStack.push(first);
      return nextStack;
    });
    setTopIndex((prev) => (prev === 0 ? 4 : prev - 1));
  };

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 100;
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
      discord: { icon: FaDiscord, style: styles.discord },
      youtube: { icon: FaYoutube, style: styles.youtube }
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

  return (
    <section id="home" className={styles.hero}>
      <div className={`swiss-container ${styles.grid}`}>
        
        {/* Left Info Column */}
        <div className={styles.left}>
          
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

          {/* Quick Meta Indicators */}
          <div className={styles.metaInfo}>
            <div className={styles.metaItem}>
              <MdOutlineLocationOn style={{ fontSize: "1.1rem" }} />
              <span>{config.education.school}</span>
            </div>
            <div className={styles.metaItem}>
              <MdWorkOutline style={{ fontSize: "1.1rem" }} />
              <span>Majoring in {config.education.major}</span>
            </div>
          </div>

          {/* CTAs */}
          <div className={styles.ctas}>
            <a href="#contact" className={styles.btnPrimary}>
              <span>Hire Me</span>
              <FaArrowRight />
            </a>
            <button 
              className={styles.btnSecondary} 
              onClick={() => alert("CV PDF file will be uploaded here shortly.")}
            >
              <FaDownload />
              <span>Download CV</span>
            </button>
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
        <div className={styles.right}>
          <div className={styles.photoStackContainer}>
            {photoStack.map((pic, idx) => {
              // Rotation offsets depending on stack depth
              const rotateOffsets = [-6, -3, 0, 3, 6];
              const offsetRotation = rotateOffsets[idx];
              
              // Top card gets interactive drag gestures
              const isTop = idx === 4;

              return (
                <motion.div
                  key={pic}
                  className={styles.photoCard}
                  style={{
                    zIndex: idx,
                    originX: 0.5,
                    originY: 0.8
                  }}
                  animate={{
                    rotate: isTop ? 0 : offsetRotation,
                    scale: 0.9 + idx * 0.025,
                    x: 0,
                    y: 0
                  }}
                  whileHover={
                    isTop ? { scale: 1.02 } : { rotate: offsetRotation * 1.5, scale: 0.95 }
                  }
                  drag={isTop}
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.4}
                  onDragEnd={handleDragEnd}
                  onClick={isTop ? cyclePhotos : undefined}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src={`/pics/${pic}`}
                    alt="Bùi Trường An Portrait"
                    className={styles.photoCardImg}
                    width={300}
                    height={400}
                    priority={isTop}
                  />
                </motion.div>
              );
            })}

            {/* Photo Counter */}
            <div className={styles.counter}>
              STK_INDEX: 0{Math.abs((topIndex % 5) + 1)} / 05
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
