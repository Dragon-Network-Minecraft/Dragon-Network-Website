import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer>
      <div class={styles.aboutUs}>
        <h4>About Us</h4>
        <p>Discover more about our mission and values.</p>
      </div>

      <div class={styles.contact}>
        <h4>Contact Us</h4>
        <p>Email: <a href="mailto:info@dragonnetwork.digital">info@dragonnetwork.digital</a></p>
        <p>Join us on <a href="https://discord.gg/TAAxqS5eXD" target="_blank">Discord</a></p>
      </div>

      <div class={styles.privacyTerms}>
        <h4>Privacy Policy and Terms of Service</h4>
        <a href="/privacy-policy" class={styles.link}>Privacy Policy</a>
        <span class={styles.separator}>|</span>
        <a href="/terms-of-service" class={styles.link}>Terms of Service</a>
      </div>

      <div class={styles.quickLinks}>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>

      <div class={styles.partnerships}>
        <h4>Partnerships</h4>
        <p>We collaborate with industry leaders to provide the best solutions.</p>
      </div>

      <div class={styles.technicalInfo}>
        <h4>Technical Information</h4>
        <p>Website made by Sujan and <a href="https://g9aerospace.in" target="_blank">G9 Aerospace</a></p>
      </div>

      <div class={styles.copyright}>
        <p>&copy; 2024 Dragon Network. All rights reserved.</p>
      </div>
    </footer>
  );
});
