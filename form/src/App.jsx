import styles from "./App.module.css";

import logo from "./logo.svg";
import blob from "./blob-haikei.svg"

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <logobox class={styles.logobox}>
          <img src={blob} class={styles.blob} alt="blob" />
          <img src={logo} class={styles.logo} alt="logo" />
        </logobox>
        <p>
          詠みましょう。
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
}

export default App;
