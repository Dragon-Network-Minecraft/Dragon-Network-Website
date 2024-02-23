import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import dragonIcon from "../images/dragonnetwork-transparent.png";

export default component$(() => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img src={dragonIcon} alt="Dragon Icon" className={styles.icon} />
          <a>
            Dragon Network
          </a>
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/vote">Vote</a></li>
          <li><a href="/store">Store</a></li>
          <li><a href="/rules">Rules</a></li>
          <li><a href="/ban-appeal">Ban Appeal</a></li>
          <li><a href="#">More</a></li>
        </ul>
      </div>
    </header>
  );
});
