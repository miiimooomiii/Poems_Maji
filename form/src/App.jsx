import styles from "./App.module.css";

import logo from "./logo.svg";

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <logobox class={styles.logobox}>
          <div class={styles.blob} />
          <img src={logo} class={styles.logo} alt="logo" />
        </logobox>
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
