// src/components/ContactSection.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiMail, FiMessageSquare, FiTrash2, FiRefreshCw } from "react-icons/fi";
import { config } from "@/data/config";
import { supabase } from "@/lib/supabase";
import styles from "./ContactSection.module.css";

interface Comment {
  id: string;
  name: string;
  message: string;
  reply: string | null;
  created_at: string;
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
    setIsAdmin(localStorage.getItem("merlin_admin_logged_in") === "true");
  };

  const loadComments = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) setComments(data);
    setIsLoading(false);
  };

  useEffect(() => {
    checkAdminState();
    window.addEventListener("admin-login-changed", checkAdminState);
    loadComments();

    // Realtime subscription — messages sync instantly across all devices
    const channel = supabase
      .channel("messages-realtime")
      .on("postgres_changes", { event: "*", schema: "public", table: "messages" }, () => {
        loadComments();
      })
      .subscribe();

    return () => {
      window.removeEventListener("admin-login-changed", checkAdminState);
      supabase.removeChannel(channel);
    };
  }, []);

  const handlePostComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setIsSubmitting(true);

    const { error } = await supabase.from("messages").insert({
      name: name.trim(),
      message: message.trim(),
    });

    if (!error) {
      setName("");
      setMessage("");
      // Realtime will reload, but manually refresh for immediacy
      await loadComments();
    }
    setIsSubmitting(false);
  };

  const handleDeleteComment = async (id: string) => {
    await supabase.from("messages").delete().eq("id", id);
    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  const handlePostReply = async (id: string) => {
    if (!replyText.trim()) return;
    await supabase.from("messages").update({ reply: replyText.trim() }).eq("id", id);
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, reply: replyText.trim() } : c))
    );
    setReplyText("");
    setReplyTargetId(null);
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
          {/* Left: Email */}
          <div className={styles.left}>
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

          {/* Right: Post form */}
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
                  placeholder="Leave a comment or question..."
                  className={styles.textarea}
                />
              </div>
              <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                <span>{isSubmitting ? "TRANSMITTING..." : "POST NOTE"}</span>
                <FiSend />
              </button>
            </form>
          </div>
        </div>

        {/* Messages Board */}
        <div className={styles.boardWrapper}>
          <h3 className={styles.boardTitle}>
            <FiMessageSquare />
            <span>Messages // {comments.length} NOTES {isAdmin && "(ADMIN)"}</span>
            <button
              onClick={loadComments}
              title="Refresh"
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
                      <div className={styles.commentHeader}>
                        <span className={styles.commentAuthor}>{comment.name}</span>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                          <span className={styles.commentDate}>
                            {new Date(comment.created_at).toLocaleDateString()}
                          </span>
                          {isAdmin && (
                            <div style={{ display: "flex", gap: "0.5rem" }}>
                              <button
                                onClick={() => { setReplyTargetId(comment.id); setReplyText(comment.reply || ""); }}
                                className={styles.actionBtn}
                              >
                                Reply
                              </button>
                              <button onClick={() => handleDeleteComment(comment.id)} className={styles.deleteBtn}>
                                <FiTrash2 />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      <p className={styles.commentText}>{comment.message}</p>

                      {isAdmin && replyTargetId === comment.id && (
                        <div className={styles.adminReplyForm}>
                          <textarea
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            placeholder="Write reply..."
                            rows={2}
                            className={styles.textarea}
                            style={{ marginTop: "1rem" }}
                          />
                          <div className={styles.replyActions}>
                            <button onClick={() => handlePostReply(comment.id)} className={styles.actionBtn}>Submit Reply</button>
                            <button onClick={() => { setReplyTargetId(null); setReplyText(""); }} className={styles.actionBtn} style={{ borderColor: "rgba(255,255,255,0.15)" }}>Cancel</button>
                          </div>
                        </div>
                      )}

                      {comment.reply && replyTargetId !== comment.id && (
                        <div className={styles.replyBox}>
                          <div className={styles.replyHeader}><span>REPLY FROM // MERLIN</span></div>
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
