// Updated JSX
import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.aboutUs}>
            <h4>About Us</h4>
            <p>Discover more about our mission and values.</p>
          </div>

          <div className={styles.contact}>
            <h4>Contact Us</h4>
            <p>Email: <a href="mailto:info@dragonnetwork.digital">info@dragonnetwork.digital</a></p>
            <p>Join us on <a href="https://discord.gg/TAAxqS5eXD" target="_blank">Discord</a></p>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.privacyTerms}>
            <h4>Privacy Policy and Terms of Service</h4>
            <a href="/privacy-policy" className={styles.link}>Privacy Policy</a>
            <span className={styles.separator}>|</span>
            <a href="/terms-of-service" className={styles.link}>Terms of Service</a>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.partnerships}>
            <h4>Partnerships</h4>
            <p>We collaborate with industry leaders to provide the best solutions.</p>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.copyrightBox}>
            <div className={styles.copyright}>
              <p>&copy; 2024 Dragon Network. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
