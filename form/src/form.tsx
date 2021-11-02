import type { Component } from "solid-js";
import { Thank, OnInputRequired, AgreementSwitch } from './action'

import styles from './app.module.styl'
import buttons from './button.module.styl'
import font from './font.module.styl'

const Form: Component = () => {
  return (
    <form className={`${styles.form} ${styles.invisible} content`} action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSd03E7BPIpR0Y9E-vfnlUTf2eU4J3OGripRMN_YrJGthUE89w/formResponse' method='post' target='hidden_iframe' onSubmit={Thank} autocomplete='off'>
      <iframe style={{ display: 'none' }} id='hidden_iframe' name='hidden_iframe' />
      <label className={`${styles.column} ${styles.label} ${font.serifBold}`} htmlFor='title'>題名
        <p className={`${styles.subinfo} ${font.serif}`}>空欄は『無題』となります</p>
        <input id='title' name='entry.1866521228' type='text' placeholder="『無題』" />
      </label>
      <label className={`${styles.column} ${styles.label} ${font.serifBold}`} htmlFor='poem'>本文
        <p className={`${styles.subinfo} ${styles.required} ${styles.inlineBlock}`}>必須</p>
        <textarea id='poem' name='entry.1602729063' required />
      </label>
      <label className={`${styles.column} ${styles.label} ${font.serifBold}`} htmlFor='name'>著者名
        <p className={`${styles.subinfo} ${font.serif}`}>空欄は『匿名』となります</p>
        <input id='name' name='entry.1285093387' type='text' placeholder="『匿名』" />
      </label>
      <label className={`${styles.column} ${styles.label} ${font.serifBold}`} htmlFor='addition'>付記
        <p className={`${styles.subinfo} ${font.serif}`}>解説や補足などはこちらへ</p>
        <textarea id='addition' name='entry.2007810462' />
      </label>
      <label className={`${styles.column} ${styles.label} ${font.serifBold}`} htmlFor='link'>リンク
        <p className={`${styles.subinfo} ${font.serif}`}>SNSやサイトのURLはこちらへ</p>
        <input id='link' name='entry.272121178' type='url' placeholder='https://' />
      </label>
      <input type='hidden' name='entry.26876002' value='' />
      <div className={`${styles.column} ${styles.prColumn}`}>
        <button className={`${styles.agreementswitch} ${font.serif}`} id='agreement' type='button' onClick={AgreementSwitch}>利用規約を読む</button>
        <hr />
        <label className={`${styles.column} ${styles.label} ${styles.ag}`} htmlFor='check'>
          <input className={`${styles.inlineBlock} ${styles.checkbox}`} id='check' type='checkbox' onChange={OnInputRequired} required />
          <p className={`${styles.subinfo} ${styles.required} ${styles.inlineBlock}`}>必須</p>
          <p className={`${styles.agreement} ${styles.inlineBlock} ${font.serif}`}>利用規約に同意します。</p>
        </label>
      </div>
      <div className={`${styles.dotsBox} ${styles.submitFontsize}`}>
        <div className={`${styles.dots}`} />
        <button className={`${styles.dotsBox} ${buttons.fix} ${buttons.button}`} name="button" type='submit' value='投稿する'>
          <div>投稿する</div>
          <svg className={`${buttons.graphic} ${buttons.graphicStroke} ${buttons.graphicScribble}`} height='9' viewBox='0 0 101 9'>
            <path d='M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294' pathLength='1' />
          </svg>
        </button>
      </div>
    </form>
  )
}

export default Form
