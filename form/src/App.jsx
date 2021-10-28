import { Blob, Thank, OnInputRequired, AgreementSwitch } from './action';

import styles from './App.module.css';

import Logo from './assets/logo.svg';

window.onscroll = () => {
  let a = document.getElementById('app');
  if (!a.classList.contains(styles.scLock)) Blob();
}

function App() {
  return (
    <div class={styles.App} id='app'>
      <header class={styles.header}>
          <button class={styles.blob} id='blob' onClick={Blob} />
        <img class={'${styles.logo} ${styles.op}'} src={Logo} alt='logo' />
      </header>
      <div class={styles.appbody}>
        <form class={'${styles.form} ${styles.invisible} ${styles.content}'} action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSd03E7BPIpR0Y9E-vfnlUTf2eU4J3OGripRMN_YrJGthUE89w/formResponse' method='post' target='hidden_iframe' onsubmit={Thank} autocomplete='off'>
          <iframe style={'display:none'} id="hidden_iframe" name="hidden_iframe" />
            <label class={'${styles.column} ${styles.label} ${styles.serifBold}'} for='title'>題名
            <p class={'${styles.subinfo} ${styles.serif}'}>空欄は『無題』となります</p>
            <input id='title' name='entry.1866521228' type='text' placeholder="『無題』" />
          </label>
           <label class={'${styles.column} ${styles.label} ${styles.serifBold}'} for='poem'>本文
            <p class={'${styles.subinfo} ${styles.required} ${styles.inlineBlock}'}>必須</p>
            <textarea id='poem' name='entry.1602729063' required="" />
          </label>
          <label class={'${styles.column} ${styles.label} ${styles.serifBold}'} for='name'>著者名
            <p class={'${styles.subinfo} ${styles.serif}'}>空欄は『匿名』となります</p>
            <input id='name' name='entry.1285093387' type='text' placeholder="『匿名』" />
          </label>
          <label class={'${styles.column} ${styles.label} ${styles.serifBold}'} for='addition'>付記
            <p class={'${styles.subinfo} ${styles.serif}'}>解説や補足などはこちらへ</p>
            <textarea id='addition' name='entry.2007810462' />
          </label>
           <label class={'${styles.column} ${styles.label} ${styles.serifBold}'} for='link'>リンク
            <p class={'${styles.subinfo} ${styles.serif}'}>SNSやサイトのURLはこちらへ</p>
            <input id='link' name='entry.272121178' type='url' placeholder='https://' />
          </label>
          <input type='hidden' name='entry.26876002' value='' />
          <div class={'${styles.column} ${styles.prColumn}'}>
            <button class={'${styles.agreementswitch} ${styles.serif}'} id='agreement' type='button' onclick={AgreementSwitch}>利用規約を読む</button>
            <hr />
            <label class={'${styles.column} ${styles.label} ${styles.ag}'} for='check'>
              <input class={'${styles.inlineBlock} ${styles.checkbox}'} id='check' type='checkbox' onChange={OnInputRequired} required />
              <p class={'${styles.subinfo} ${styles.required} ${styles.inlineBlock}'}>必須</p>
              <p class={'${styles.agreement} ${styles.inlineBlock} ${styles.serif}'}>利用規約に同意します。</p>
            </label>
          </div>
          <button class={styles.buttonBelow} name="button" type='submit' value="送信">送信</button>
        </form>
      </div>
      <div class={'${styles.footer} ${styles.invisible} ${styles.content}'}>
        <div class={'${styles.linkbox}'}>
          <a class={'${styles.link} ${styles.about}'} href='https://twitter.com/majipoem' target='_blank' rel='author'>みんなのマジポエムについて</a>
          <a class={'${styles.link} ${styles.twitter}'} href='https://twitter.com/majipoem' target='_blank' rel='author'>Twitter</a>
        </div>
      </div>
      <div class={'${styles.visible} ${styles.invisible} ${styles.thankblob} ${styles.ed}'}>
        <div class={styles.blob} style={'background-color:#f4f4f4;pointer-events:none'}>
          <p class={styles.thankmessage}>投稿されました。</p>
        </div>
      </div>
    </div>
  );
}

export default App;
