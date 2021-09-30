import styles from "./App.module.css";

import blob from "./action"

import logo from "./logo.svg";

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <blobbox id="blobbox">
          <button class={styles.blob} onClick={blob} />
        </blobbox>
        <img src={logo} class={styles.logo} alt="logo" />
      </header>
      <div class={styles.body}>
        <p>あ</p>
      </div>
    </div>
  );
}

export default App;
