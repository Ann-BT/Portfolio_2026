// src/components/ContactSection.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { config } from "@/data/config";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`https://formspree.io/f/xknpndda`, {
        method: "POST",
        body: JSON.stringify(formObject),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      });

      if (response.ok) {
        setIsSuccess(true);
        e.currentTarget.reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          setErrorMsg(data.errors.map((err: any) => err.message).join(", "));
        } else {
          setErrorMsg("Something went wrong. Please try again later.");
        }
      }
    } catch (err) {
      setErrorMsg("Network error. Please verify your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="swiss-container">
        
        {/* Section Header */}
        <h2 className={styles.heading}>
          <span className={styles.headingDot} />
          <span>Contact</span>
        </h2>

        <div className={styles.grid}>
          {/* Left Panel: Social & General Info */}
          <div className={styles.left}>
            <div>
              <h3 className={styles.subtitle}>Let's secure something together.</h3>
              <p className={styles.text}>
                I am currently open to freelance opportunities, academic research collaborations, and part-time positions in defensive security / SOC engineering.
              </p>
            </div>

            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Direct Line //</span>
                <a href={`mailto:${config.email}`} className={styles.detailValue}>
                  {config.email}
                </a>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Location //</span>
                <span className={styles.detailValue}>{config.location}</span>
              </div>
            </div>
          </div>

          {/* Right Panel: Formspree Contact Form */}
          <div>
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={styles.successMsg}
              >
                <h3 className={styles.successTitle}>MESSAGE RECEIVED</h3>
                <p style={{ color: "var(--text)" }}>
                  Thank you for reaching out. Your transmission has been decrypted and queued. I will get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className={styles.submitBtn}
                  style={{ marginTop: "1rem" }}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                
                {/* Name & Email Row */}
                <div className={styles.row}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Name //</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Merlin"
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email //</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="name@domain.com"
                      className={styles.input}
                    />
                  </div>
                </div>

                {/* Subject Dropdown */}
                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>Subject //</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className={styles.select}
                  >
                    <option value="Freelance Work">Freelance Work / Contract</option>
                    <option value="Collaboration">Research Collaboration</option>
                    <option value="Academic">Academic / Master's Discussion</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                {/* Message Body */}
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message //</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe your security requirements or project goals..."
                    className={styles.textarea}
                  />
                </div>

                {errorMsg && (
                  <p style={{ color: "#ff4444", fontSize: "0.85rem", fontFamily: "var(--font-mono)" }}>
                    ERROR: {errorMsg}
                  </p>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitBtn}
                >
                  <span>{isSubmitting ? "TRANSMITTING..." : "SEND TRANSMISSION"}</span>
                  <FiSend />
                </button>

              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
