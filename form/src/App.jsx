
import { Blob, Blobscroll, Thank } from './action';

import styles from './App.module.css';


import Logo from './logo.svg';

var nowPosition = 0;

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
          <button class={styles.blob} id='blob' style='background-color:#000000' onClick={Blob}>
          </button>
          <img src={Logo} class={styles.logo} id='logo' alt='logo' />
      </header>
      <appbody id='appbody' class={styles.invisible}>
        <div class={styles.headmargin} />
        <form class={styles.form} action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSd03E7BPIpR0Y9E-vfnlUTf2eU4J3OGripRMN_YrJGthUE89w/formResponse' method="post" target="hidden_iframe" onsubmit={Thank}>
          <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe>
          <div class={styles.column}>
            <label for='title'>題名</label>
            <input type='text' id='title' name='entry.1866521228' class={styles.short} placeholder="題名（空欄の場合は 無題 となります）："></input>
          </div>
          <div class={styles.column}>
            <label for='poem'>本文</label>
            <textarea id='poem' name='entry.1602729063' placeholder="本文（入力必須）：" required=""></textarea>
          </div>
          <div class={styles.column}>
            <label for='name'>著者名</label>
            <input type='text' id='name' name='entry.1285093387' class={styles.short} placeholder="著者名（空欄の場合は 匿名 となります）："></input>
          </div>
          <div class={styles.column}>
            <label for='addition'>付記</label>
            <textarea id='addition' name='entry.2007810462' placeholder="付記："></textarea>
          </div>
          <div class={styles.column}>
            <label for='link'>リンク</label>
            <input type='text' id='link' name='entry.272121178' placeholder="リンク："></input>
          </div>
          <p><button type="submit" class={styles.submit} name="button" value="送信">送信</button></p>
        </form>
      </appbody>
      <thankblob class={styles.invisible} id='thankblob'>
        <div class={styles.blob} style='background-color:#f4f4f4; pointer-events:none;'>
          <p class={styles.thankmessage}>ありがとうございます。</p>
        </div>
      </thankblob>
    </div>
  );
}

export default App;
