import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer>

      <div class={styles.privacyTerms}>
        <a href="/privacy-policy" class={styles.link}>
          Privacy Policy
        </a>
        <span class={styles.separator}>|</span>
        <a href="/terms-of-service" class={styles.link}>
          Terms of Service
        </a>
      </div>

      <div class={styles.contactInfo}>
        <p>Contact us: <a href="mailto:info@dragonnetwork.digital">info@dragonnetwork.digital</a></p>
        <p>Discord: <a href="https://discord.gg/ZuzbU2j5qR" target="_blank">Dragon Digital Discord</a></p>
      </div>

      <div class={styles.madeBy}>
        <p>Website made by Sujan and <a href="https://g9aerospace.in" target="_blank">G9 Aerospace</a></p>
      </div>
    </footer>
  );
});
