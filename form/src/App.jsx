
import { Blob, Blobscroll, Thank } from './action';

import styles from './App.module.css';


import Logo from './logo.svg';



function App() {
   return (
    <div id='app' class={styles.App}>
      <header class={styles.header}>
          <button class={styles.blob} id='blob' style='background-color:#000000' onClick={Blob}>
          </button>
          <img src={Logo} class={styles.logo} id='logo' alt='logo' />
      </header>
      <div class={styles.headmargin} />
      <appbody id='appbody'>
        <form id='form' class={styles.form} class={styles.invisible} action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSd03E7BPIpR0Y9E-vfnlUTf2eU4J3OGripRMN_YrJGthUE89w/formResponse' method="post" target="hidden_iframe" onsubmit={Thank}>
          <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe>
           <label class={styles.column} for='title'>題名
            <p class={styles.subinfo}>空欄の場合は『無題』となります</p>
            <input type='text' id='title' name='entry.1866521228' placeholder="『無題』"></input>
          </label>
          <label class={styles.column} for='poem'>本文
            <p class={styles.subinfo} class={styles.required}>必須</p>
            <textarea id='poem' name='entry.1602729063' required=""></textarea>
          </label>
          <label class={styles.column} for='name'>著者名
            <p class={styles.subinfo}>空欄の場合は『匿名』となります</p>
            <input type='text' id='name' name='entry.1285093387' placeholder="『匿名』"></input>
          </label>
          <label class={styles.column} for='addition'>付記
            <p class={styles.subinfo}>解説や補足などはこちらへ</p>
            <textarea id='addition' name='entry.2007810462'></textarea>
          </label>
          <label class={styles.column} for='link'>リンク
            <p class={styles.subinfo}>SNSやサイトのURLはこちらへ</p>
            <input type='url' id='link' name='entry.272121178' placeholder="https://"></input>
          </label>
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
