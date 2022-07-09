import type { Component } from "solid-js";
import { Blob } from './action'

import styles from './app.module.styl'
import font from './font.module.styl'

import Logo from './assets/logo.svg'
import Form from './form'
import nagiWebp from './assets/nagi.webp'
import nagiPng from './assets/nagi.png'
import nonoWebp from './assets/nono.webp'
import nonoPng from './assets/nono.png'

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
        <div id='idols' className={`${styles.visible}`} style={{ 'transition-duration':'200ms'}}>
          <picture>
            <source srcset={nagiWebp} type="image/webp" />
            <img className={`${styles.idol} ${styles.left}`} src={nagiPng} />
          </picture>
          <picture>
            <source srcset={nonoWebp} type="image/webp" />
            <img className={`${styles.idol} ${styles.right}`} src={nonoPng} />
          </picture>
        </div>
      </header>
      <div className={styles.appbody}>
        <Form />
      </div>
      <div className={`${styles.footer} ${styles.invisible} content`}>
        <div className={`${styles.linkbox}`}>
          <p className={`${font.serif} ${styles.labelTwitter}`}>Twitter</p>
          <a className={`${styles.link} ${styles.twitter}`} href='https://twitter.com/NONO_info0827' target='_blank' rel='author'>ののinfo</a>
          <a className={`${styles.link} ${styles.twitter}`} href='https://twitter.com/mansionofnagi' target='_blank' rel='author'>凪の邸宅</a>
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
