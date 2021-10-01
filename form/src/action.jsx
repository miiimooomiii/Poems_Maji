import styles from './App.module.css';

var timer1 = null;
var timer2 = null;

export function blob() {
  const target = document.getElementById('blob');
  const bodytarget = document.getElementById('appbody');
  const logotarget = document.getElementById('logo');
  clearTimeout(timer1);
  target.disabled = true;
  if (target.className == styles.blob ) {
    target.classList.add(styles.mini);
    timer1 = setTimeout(function () {
      logotarget.classList.add(styles.invisible);
      bodytarget.classList.remove(styles.invisible);
    }, 400);
  } else {
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

export function blobscroll(nowPosition) {
  let diffPosition 
}

export function thank() {
  const target = document.getElementById('blob');
  const bodytarget = document.getElementById('appbody');
  const thanktarget = document.getElementById('thankblob');
  target.classList.remove(styles.mini);
  bodytarget.classList.add(styles.invisible);
  target.classList.add(styles.large);
  clearTimeout(timer1);
  timer1 = setTimeout(function () {
    thanktarget.classList.remove(styles.invisible);
  }, 400);
}
