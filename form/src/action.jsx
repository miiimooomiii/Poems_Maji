import styles from './App.module.css';

var timer1 = null;
var timer2 = null;

export function Blob() {
  const target = document.getElementById('blob');
  const bodytarget = document.getElementById('form');
  const logotarget = document.getElementById('logo');
  clearTimeout(timer1);
  target.disabled = true;
  if (target.className == styles.blob ) {
    target.classList.add(styles.mini);
    timer1 = setTimeout(function () {
      logotarget.classList.add(styles.invisible);
      bodytarget.classList.remove(styles.invisible);
      bodytarget.classList.add(styles.visible);
    }, 400);
  } else {
    bodytarget.classList.remove(styles.visible);
    bodytarget.classList.add(styles.invisible);
    timer1 = setTimeout(function () {
      logotarget.classList.remove(styles.invisible);
      target.classList.remove(styles.mini);
    }, 400);
  }
  clearTimeout(timer2);
  timer2 = setTimeout(function () {
    target.disabled = false;
    return
  }, 400);
}

export function Blobscroll(nowPosition) {
  let diffPosition 
}

export function Thank() {
  const target = document.getElementById('blob');
  const bodytarget = document.getElementById('form');
  const thanktarget = document.getElementById('thankblob');
  target.classList.remove(styles.mini);
  bodytarget.classList.remove(styles.visible);
  bodytarget.classList.add(styles.invisible);
  target.classList.add(styles.large);
  clearTimeout(timer1);
  timer1 = setTimeout(function () {
    thanktarget.classList.remove(styles.invisible);
    thanktarget.classList.add(styles.visible);
  }, 400);
}
