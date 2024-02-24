// Updated JSX
import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer class={styles.footer}>
      <div class={styles.row}>
        <div class={styles.column}>
          <div class={styles.aboutUs}>
            <h4>About Us</h4>
            <p>Discover more about our mission and values.</p>
          </div>

          <div class={styles.contact}>
            <h4>Contact Us</h4>
            <p>Email: <a href="mailto:info@dragonnetwork.digital">info@dragonnetwork.digital</a></p>
            <p>Join us on <a href="https://discord.gg/TAAxqS5eXD" target="_blank">Discord</a></p>
          </div>
        </div>

        <div class={styles.column}>
          <div class={styles.privacyTerms}>
            <h4>Privacy Policy and Terms of Service</h4>
            <a href="/privacy-policy" class={styles.link}>Privacy Policy</a>
            <span class={styles.separator}>|</span>
            <a href="/terms-of-service" class={styles.link}>Terms of Service</a>
          </div>
        </div>

        <div class={styles.column}>
          <div class={styles.partnerships}>
            <h4>Partnerships</h4>
            <p>We collaborate with industry leaders to provide the best solutions.</p>
          </div>
        </div>
      </div>

      <div class={styles.row}>
        <div class={styles.column}>
          <div class={styles.copyrightBox}>
            <div class={styles.copyright}>
              <p>&copy; 2024 Dragon Network. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
