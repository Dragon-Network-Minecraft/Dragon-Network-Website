import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(() => {
  const aquaLogoUrl = "https://media.discordapp.net/attachments/1134051261688328294/1210964439512121365/aqualogo-removebg-preview.png?ex=65ec7985&is=65da0485&hm=035db77170dd86412fbf4672147696c371cec79f0d46f2cd1668659b84f89e37&=&format=webp&quality=lossless&width=512&height=512";

  return (
    <header class={`${styles.header} ${styles.animatedBackground}`}>
      <div class={styles.wrapper}>
        <div class={styles.logo}>
          <img src={aquaLogoUrl} alt="Aqua Logo" class={styles.animatedLogo} />
        </div>
        <ul class={styles.navList}>
          <li><a href="/">Home</a></li>
          <li><a href="/vote">Vote</a></li>
          <li><a href="/store">Store</a></li>
          <li><a href="/rules">Rules</a></li>
        </ul>
      </div>
    </header>
  );
});
