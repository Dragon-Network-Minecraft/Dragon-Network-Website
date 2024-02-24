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
        <div class={styles.socialMediaIcons}>
          <a href="https://discord.gg/TAAxqS5eXD" target="_blank"><img src="https://media.discordapp.net/attachments/1134051261688328294/1210947299040174140/discord.png?ex=65ec698e&is=65d9f48e&hm=5adb4638198ff8eedeb5b791642e5e263ab0a2a22378bf74aba39632ac383601&=&format=webp&quality=lossless&width=25&height=25" alt="Discord Icon" style={{ width: '25px', height: '25px' }} /></a>
          <a>     </a>
          <span class={styles.iconSpacer}></span>
          <a href="https://www.instagram.com/dragonnetwork.dg" target="_blank"><img src="https://media.discordapp.net/attachments/1134051261688328294/1210947299946012692/instagram.png?ex=65ec698e&is=65d9f48e&hm=732a5d849b3efbe06f6bc1057354638619c686e298a9c94b22fac1fb48689d3d&=&format=webp&quality=lossless&width=25&height=25" alt="Instagram Icon" style={{ width: '25px', height: '25px' }} /></a>
          <span class={styles.iconSpacer}></span>
          <a href="https://www.facebook.com/profile.php?id=61556654522748" target="_blank"><img src="https://media.discordapp.net/attachments/1134051261688328294/1210949641676259369/download-removebg-preview.png?ex=65ec6bbc&is=65d9f6bc&hm=ad831271b4d83f80e315e2dc9e6ff232ad317310a3b0c0c5db9557204aa8d3f5&=&format=webp&quality=lossless&width=281&height=281" alt="Facebook Icon" style={{ width: '25px', height: '25px' }} /></a>
        </div>
      </div>

      <div class={styles.madeBy}>
        <p>Website made by Sujan and <a href="https://g9aerospace.in" target="_blank">G9 Aerospace</a></p>
      </div>
    </footer>
  );
});
