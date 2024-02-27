// Updated JSX with social media icons
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
          </div>
        </div>

        <div class={styles.column}>
          <div class={styles.privacyTerms}>
            <h4>Links</h4>
            <a href="/privacy-policy" class={styles.link}>Privacy Policy</a>
            <br></br>
            <a href="/terms-of-service" class={styles.link}>Terms of Service</a>
            <br></br>
            <a href="/cookies-policy" class={styles.link}>Cookies Policy</a>
          </div>
        </div>

        <div class={styles.column}>
          <div class={styles.partnerships}>
            <h4>Partnerships</h4>
            <p>We collaborate with industry leaders to provide the best solutions.</p>
            <p>Partnership: <a href="mailto:partnership@dragonnetwork.digital">partnership@dragonnetwork.digital</a></p>

            {/* Social Media Icons */}
            <h4>Stay Connected</h4>
            <div class={styles.socialIcons}>
              <a href="https://www.instagram.com/dragonnetwork.dg" target="_blank">
                <img src="https://media.discordapp.net/attachments/1134051261688328294/1210947299946012692/instagram.png?ex=65ec698e&is=65d9f48e&hm=732a5d849b3efbe06f6bc1057354638619c686e298a9c94b22fac1fb48689d3d&=&format=webp&quality=lossless&width=688&height=688" alt="Instagram" style={{ maxHeight: '30px' }} />
              </a>

              <a href="https://www.facebook.com/profile.php?id=61556654522748" target="_blank">
                <img src="https://media.discordapp.net/attachments/1134051261688328294/1210949641676259369/download-removebg-preview.png?ex=65ec6bbc&is=65d9f6bc&hm=ad831271b4d83f80e315e2dc9e6ff232ad317310a3b0c0c5db9557204aa8d3f5&=&format=webp&quality=lossless&width=281&height=281" alt="Facebook" style={{ maxHeight: '30px' }} />
              </a>

              <a href="https://github.com/Dragon-Network-Minecraft" target="_blank">
                <img src="https://media.discordapp.net/attachments/1134051261688328294/1210947299409133598/github.jpg?ex=65ec698e&is=65d9f48e&hm=c1f63faacbf8c0aa288af0aef46c6add8e4ac9e8a16ef45f4915ad11ef240cec&=&format=webp&width=525&height=525" alt="GitHub" style={{ maxHeight: '30px' }} />
              </a>

              <a> </a>

              <a href="https://discord.gg/TAAxqS5eXD" target="_blank">
                <img src="https://media.discordapp.net/attachments/1134051261688328294/1210947299040174140/discord.png?ex=65ec698e&is=65d9f48e&hm=5adb4638198ff8eedeb5b791642e5e263ab0a2a22378bf74aba39632ac383601&=&format=webp&quality=lossless&width=320&height=320" alt="Discord" style={{ maxHeight: '30px' }} />
              </a>
            </div>
          </div>
        </div>


      <div class={styles.copyrightBox}>
        <div class={styles.copyright}>
          <p>&copy; 2024 Dragon Network. All rights reserved.</p>
        </div>
      </div>

      </div>
    </footer>
  );
});
