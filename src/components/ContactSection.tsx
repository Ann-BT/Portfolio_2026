// src/components/ContactSection.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiMail, FiMessageSquare, FiTrash2, FiCornerDownRight } from "react-icons/fi";
import { config } from "@/data/config";
import styles from "./ContactSection.module.css";

interface Comment {
  id: string;
  name: string;
  message: string;
  created_at: string;
  reply?: string;
}

const mockComments: Comment[] = [
  {
    id: "mock-1",
    name: "Alex Security",
    message: "The custom WAF sidecar implementation in SIDERIS is very interesting. Are you planning to release details on the packet latency results?",
    created_at: "2026-08-05",
    reply: "Thanks Alex! Yes, the detailed results will be published in my upcoming research paper. Standard latency is under 3ms."
  },
  {
    id: "mock-2",
    name: "HackerOne Member",
    message: "Love the terminal drop-down easter egg! Found the flag in the inspect panel as well. Clean design.",
    created_at: "2026-08-07",
    reply: "Glad you found the easter egg! Security recons pay off."
  }
];

export default function ContactSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Track which comment Merlin is currently replying to
  const [replyTargetId, setReplyTargetId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

  const checkAdminState = () => {
    const logged = localStorage.getItem("merlin_admin_logged_in") === "true";
    setIsAdmin(logged);
  };

  // Sync admin state and load comments
  useEffect(() => {
    checkAdminState();
    
    // Listen to custom login/logout events from terminal
    window.addEventListener("admin-login-changed", checkAdminState);

    const saved = localStorage.getItem("merlin_guestbook_comments");
    if (saved) {
      try {
        setComments(JSON.parse(saved));
      } catch (e) {
        setComments(mockComments);
      }
    } else {
      setComments(mockComments);
      localStorage.setItem("merlin_guestbook_comments", JSON.stringify(mockComments));
    }

    return () => window.removeEventListener("admin-login-changed", checkAdminState);
  }, []);

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    const newComment: Comment = {
      id: `comment-${Date.now()}`,
      name: name.trim(),
      message: message.trim(),
      created_at: new Date().toISOString().split("T")[0]
    };

    setTimeout(() => {
      const updated = [newComment, ...comments];
      setComments(updated);
      localStorage.setItem("merlin_guestbook_comments", JSON.stringify(updated));
      setName("");
      setMessage("");
      setIsSubmitting(false);
    }, 600);
  };

  // Admin delete comment
  const handleDeleteComment = (id: string) => {
    const updated = comments.filter((c) => c.id !== id);
    setComments(updated);
    localStorage.setItem("merlin_guestbook_comments", JSON.stringify(updated));
  };

  // Admin post reply
  const handlePostReply = (id: string) => {
    if (!replyText.trim()) return;

    const updated = comments.map((c) => {
      if (c.id === id) {
        return { ...c, reply: replyText.trim() };
      }
      return c;
    });

    setComments(updated);
    localStorage.setItem("merlin_guestbook_comments", JSON.stringify(updated));
    setReplyText("");
    setReplyTargetId(null);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="swiss-container">
        
        {/* Section Header */}
        <h2 className={styles.heading}>
          <span className={styles.headingDot} />
          <span>Contact & Guestbook</span>
        </h2>

        <div className={styles.grid}>
          {/* Left Panel: Direct Work Inquiry Email Card */}
          <div className={styles.left}>
            <div>
              <h3 className={styles.subtitle}>Direct Inquiries</h3>
              <p className={styles.text}>
                For professional work contracts, freelance availability, or academic collaborations, please transmit a direct email.
              </p>
              
              <a href={`mailto:${config.email}`} className={styles.emailCtaCard}>
                <FiMail className={styles.emailIcon} />
                <div className={styles.emailCardTexts}>
                  <span className={styles.emailLabel}>SEND WORK EMAIL //</span>
                  <span className={styles.emailValue}>{config.email}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Panel: Leaving a comment / note */}
          <div>
            <h3 className={styles.subtitle}>Leave a Note</h3>
            <form onSubmit={handlePostComment} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="comment-name" className={styles.label}>Name //</label>
                <input
                  type="text"
                  id="comment-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="e.g. Guest Researcher"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="comment-msg" className={styles.label}>Message //</label>
                <textarea
                  id="comment-msg"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  placeholder="Leave a comment or question on my board..."
                  className={styles.textarea}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitBtn}
              >
                <span>{isSubmitting ? "TRANSMITTING..." : "POST NOTE"}</span>
                <FiSend />
              </button>
            </form>
          </div>
        </div>

        {/* Comment Section Board */}
        <div className={styles.boardWrapper}>
          <h3 className={styles.boardTitle}>
            <FiMessageSquare />
            <span>Messages // {comments.length} NOTES {isAdmin && "(ADMIN SESSION ACTIVE)"}</span>
          </h3>

          <div className={styles.commentsList}>
            <AnimatePresence initial={false}>
              {comments.map((comment) => (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={styles.commentItem}
                >
                  {/* User Note */}
                  <div className={styles.commentHeader}>
                    <span className={styles.commentAuthor}>{comment.name}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <span className={styles.commentDate}>{comment.created_at}</span>
                      
                      {/* Admin Actions */}
                      {isAdmin && (
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                          <button
                            onClick={() => {
                              setReplyTargetId(comment.id);
                              setReplyText(comment.reply || "");
                            }}
                            className={styles.actionBtn}
                            title="Reply to message"
                          >
                            Reply
                          </button>
                          <button
                            onClick={() => handleDeleteComment(comment.id)}
                            className={styles.deleteBtn}
                            title="Delete message"
                          >
                            <FiTrash2 />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className={styles.commentText}>{comment.message}</p>

                  {/* Admin Reply Input Field */}
                  {isAdmin && replyTargetId === comment.id && (
                    <div className={styles.adminReplyForm}>
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Write admin reply..."
                        rows={2}
                        className={styles.textarea}
                        style={{ marginTop: "1rem" }}
                      />
                      <div className={styles.replyActions}>
                        <button
                          onClick={() => handlePostReply(comment.id)}
                          className={styles.actionBtn}
                        >
                          Submit Reply
                        </button>
                        <button
                          onClick={() => {
                            setReplyTargetId(null);
                            setReplyText("");
                          }}
                          className={styles.actionBtn}
                          style={{ borderColor: "rgba(255,255,255,0.15)" }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Admin Reply View */}
                  {comment.reply && replyTargetId !== comment.id && (
                    <div className={styles.replyBox}>
                      <div className={styles.replyHeader}>
                        <span>REPLY FROM // MERLIN</span>
                      </div>
                      <p className={styles.replyText}>{comment.reply}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
