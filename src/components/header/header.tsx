import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.wrapper}>
        <div class={styles.logo}>
          <a href="/" title="Dragon Network">
            Dragon Network
          </a>
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/vote">Vote</a></li>
          <li><a href="/store">Store</a></li>
          <li><a href="/rules">Rules</a></li>
          <li><a href="/ban-appeal">Ban Appeal</a></li>
          <li><a>More</a></li>
        </ul>
      </div>
    </header>
  );
});
