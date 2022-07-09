import styles from './app.module.styl'
import smoothscroll from 'smoothscroll-polyfill'

smoothscroll.polyfill()

const rq = document.getElementsByClassName(styles.required)
let scTop = () => scroll({ top: 0, left: 0, behavior: 'smooth' })

export const Blob = () => {
  const
    a = document.getElementById('app') as HTMLElement,
    b = document.getElementById('blob') as HTMLInputElement,
    o = document.getElementsByClassName('op'),
    c = document.getElementsByClassName('content'),
    idols = document.getElementById('idols') as HTMLInputElement

  b.disabled = true

  if (b.classList.contains(styles.mini)) {
    // ヘッダークリック時
    for (const i of c) i.classList.replace(styles.visible, styles.invisible)
    idols.classList.replace(styles.invisible, styles.visible)
    scTop()
    setTimeout(() => {
      for (const i of o) i.classList.remove(styles.invisible)
      b.classList.remove(styles.mini)
      setTimeout(() => a.classList.remove('scLock'), 200)
    }, 400)
  } else {
    // ロゴクリック時
    idols.classList.replace(styles.visible, styles.invisible)
    a.classList.add('scLock')
    b.classList.add(styles.mini)
    scTop()
    setTimeout(() => scroll(0, 0), 390)
    setTimeout(() => {
      scTop()
      for (const i of o) i.classList.add(styles.invisible)
      for (const i of c) i.classList.replace(styles.invisible, styles.visible)
    }, 400)
  }

  setTimeout(() => {
    b.disabled = false
    return
  }, 400)
}

export function Thank() {
  const
    b = document.getElementById('blob') as HTMLInputElement,
    e = document.getElementsByClassName('ed'),
    c = document.getElementsByClassName('content')

  b.classList.replace(styles.mini, styles.large)
  for (const i of c) i.classList.replace(styles.visible, styles.invisible)
  setTimeout(() => {
    for (const i of e) i.classList.remove(styles.invisible);
  }, 400)
  return
}

export function OnInputRequired(this: HTMLInputElement) {
  if (this.checked) rq[1].classList.add(styles.filled)
  else rq[1].classList.remove(styles.filled)
}

export function AgreementSwitch() {
  return
}
