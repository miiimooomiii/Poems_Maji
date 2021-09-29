import logo from "./logo.svg";
import blob from "./blob-scene-haikei.svg"

import styles from "./App.module.css";

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={blob} class={styles.blob} alt="blob" />
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
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
