// src/components/ContactSection.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiMail, FiMessageSquare, FiTrash2, FiRefreshCw } from "react-icons/fi";
import { config } from "@/data/config";
import styles from "./ContactSection.module.css";

interface Comment {
  id: string;
  name: string;
  message: string;
  created_at: string;
  reply?: string;
}

// JSONBlob endpoint — free persistent cross-device JSON storage
const BLOB_ID = "019fe0b4-b46f-7f02-bc3b-5c65c6d5d33e";
const BLOB_URL = `https://jsonblob.com/api/jsonBlob/${BLOB_ID}`;

async function fetchComments(): Promise<Comment[]> {
  try {
    const res = await fetch(BLOB_URL, {
      headers: { Accept: "application/json" }
    });
    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();
    return Array.isArray(data.comments) ? data.comments : [];
  } catch {
    return [];
  }
}

async function saveComments(comments: Comment[]): Promise<void> {
  try {
    await fetch(BLOB_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ comments })
    });
  } catch {
    // silently fail — data still visible locally
  }
}

export default function ContactSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  
  const [replyTargetId, setReplyTargetId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

  const checkAdminState = () => {
    const logged = localStorage.getItem("merlin_admin_logged_in") === "true";
    setIsAdmin(logged);
  };

  useEffect(() => {
    checkAdminState();
    window.addEventListener("admin-login-changed", checkAdminState);

    // Load from cross-device store
    fetchComments().then((data) => {
      setComments(data);
      setIsLoading(false);
    });

    return () => window.removeEventListener("admin-login-changed", checkAdminState);
  }, []);

  const handlePostComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    const newComment: Comment = {
      id: `comment-${Date.now()}`,
      name: name.trim(),
      message: message.trim(),
      created_at: new Date().toISOString().split("T")[0]
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    await saveComments(updated);
    setName("");
    setMessage("");
    setIsSubmitting(false);
  };

  const handleDeleteComment = async (id: string) => {
    const updated = comments.filter((c) => c.id !== id);
    setComments(updated);
    await saveComments(updated);
  };

  const handlePostReply = async (id: string) => {
    if (!replyText.trim()) return;

    const updated = comments.map((c) => {
      if (c.id === id) return { ...c, reply: replyText.trim() };
      return c;
    });

    setComments(updated);
    await saveComments(updated);
    setReplyText("");
    setReplyTargetId(null);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    fetchComments().then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="swiss-container">
        
        {/* Section Header */}
        <h2 className={styles.heading}>
          <span className={styles.headingDot} />
          <span>Contact & Messages</span>
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
            <button
              onClick={handleRefresh}
              title="Refresh messages"
              style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", color: "var(--muted)", display: "flex", alignItems: "center" }}
            >
              <FiRefreshCw size={14} />
            </button>
          </h3>

          {isLoading ? (
            <div style={{ textAlign: "center", padding: "2rem", fontFamily: "var(--font-mono)", color: "var(--muted)", fontSize: "0.85rem" }}>
              FETCHING MESSAGES...
            </div>
          ) : (
            <div className={styles.commentsList}>
              <AnimatePresence initial={false}>
                {comments.length === 0 ? (
                  <div style={{ textAlign: "center", padding: "2rem", fontFamily: "var(--font-mono)", color: "var(--muted)", fontSize: "0.85rem" }}>
                    NO MESSAGES YET — BE THE FIRST //
                  </div>
                ) : (
                  comments.map((comment) => (
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

                      {/* Reply View */}
                      {comment.reply && replyTargetId !== comment.id && (
                        <div className={styles.replyBox}>
                          <div className={styles.replyHeader}>
                            <span>REPLY FROM // MERLIN</span>
                          </div>
                          <p className={styles.replyText}>{comment.reply}</p>
                        </div>
                      )}
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
