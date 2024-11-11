"use client";
import styles from "./Footer.module.css";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
        <div className={styles.logoContainer}>
          <img
            src="/Logo-White.svg"
            alt="Limelight Logo"
            className={styles.logo}
          />
          <p>LIMELIGHT</p>
        </div>
        </div>

        {/* Links Section */}
        <div className={styles.linksSection}>
          <div className={styles.column}>
            <h3>Company</h3>
            <ul>
              <li>Nano-coating</li>
              <li>Fit-outs</li>
              <li>About us</li>
              <li>FAQs</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Support</h3>
            <ul>
              <li>Contact us</li>
              <li>Terms of service</li>
              <li>Legal</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className={styles.contactSection}>
          <h3>Reach us at</h3>
          <p>
            Green Tower - Deira - Riggat Al Buteen - Dubai - United Arab
            Emirates
          </p>
          <p>+971-568384466</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.bottomSectionTextholder}>

        <p>Limelight maintenance and services Copyright © 2024</p>
        <p>All rights reserved</p>
        </div>
        <div className={styles.socialIcons}>
          <FaInstagram />
          <FaFacebook />
          <FaEnvelope />
        </div>
      </div>
    </footer>
  );
}
