import styles from './App.module.css';
import smoothscroll from 'smoothscroll-polyfill';
import { lazy } from "solid-js";

smoothscroll.polyfill();

let m = [];
const rq = document.getElementsByClassName(styles.required);
let scTop = () => scroll({ top: 0, left: 0, behavior: 'smooth' });

export function Blob() {
  const
    a = document.getElementById('app'),
    b = document.getElementById('blob'),
    o = document.getElementsByClassName(styles.op),
    c = document.getElementsByClassName(styles.content)
  ;

  async function sc1() {
    for (const i of o) i.classList.remove(styles.invisible);
    b.classList.remove(styles.mini);
  }
  async function sc2() {
    setTimeout(() => a.classList.remove(styles.scLock), 200);
  }
  async function sc() {
    const res = await sc1();
    await sc2(res);
  }

  b.disabled = true;

  if (b.classList.contains(styles.mini)) {
    // ヘッダークリック時
    for (const i of c) i.classList.replace(styles.visible, styles.invisible);
    scTop();
    setTimeout(() => sc(), 400);
  } else {
    // ロゴクリック時
    a.classList.add(styles.scLock);
    b.classList.add(styles.mini);
    scTop();
    setTimeout(() => scroll(0,0), 390);
    setTimeout(() => {
      scTop();
      for (const i of o) i.classList.add(styles.invisible);
      for (const i of c) i.classList.replace(styles.invisible, styles.visible);
    }, 400);
  }
  setTimeout(() => {
    b.disabled = false;
    return;
  }, 400);
}

export function Thank() {
  const
    b = document.getElementById('blob'),
    e = document.getElementsByClassName(styles.ed),
    c = document.getElementsByClassName(styles.content)
  ;
  b.classList.replace(styles.mini, styles.large);
  for (const i of c) i.classList.replace(styles.visible, styles.invisible);
  clearTimeout(m);
  m = setTimeout(function () {
    for (const i of e) i.classList.remove(styles.invisible);
  }, 400);
  return;
}

export function OnInputRequired() {
  if (this.checked) rq[1].classList.add(styles.filled);
  else rq[1].classList.remove(styles.filled);
}

export function AgreementSwitch() {
  return;
}
