import type { Component } from "solid-js";
import { Blob } from './action'

import styles from './app.module.styl'

import Logo from './assets/logo.svg'
import Form from './form'

window.onscroll = () => {
  let a = document.getElementById('app') as HTMLElement
  if (!a.classList.contains('scLock')) Blob()
}

const App: Component = () => {
  return (
    <div className={styles.App} id='app'>
      <header className={styles.header}>
        <button className={styles.blob} id='blob' onClick={Blob} />
        <img className={`${styles.logo} op`} src={Logo} alt='logo' />
      </header>
      <div className={styles.appbody}>
        <Form />
      </div>
      <div className={`${styles.footer} ${styles.invisible} content`}>
        <div className={`${styles.linkbox}`}>
          <a className={`${styles.link} ${styles.about}`} href='https://twitter.com/majipoem' target='_blank' rel='author'>みんなのマジポエムについて</a>
          <a className={`${styles.link} ${styles.twitter}`} href='https://twitter.com/majipoem' target='_blank' rel='author'>Twitter</a>
        </div>
      </div>
      <div className={`${styles.visible} ${styles.invisible} ${styles.thankblob} ed`}>
        <div className={styles.blob} style={{ backgroundColor:'#f4f4f4', pointerEvents:'none'}}>
          <p className={styles.thankmessage}>投稿されました。</p>
        </div>
      </div>
    </div>
  )
}

export default App
