import styles from './App.module.css';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

let m = [];
const rq = document.getElementsByClassName(styles.required);

export function Blob() {
  const
    a = document.getElementById('app'),
    b = document.getElementById('blob'),
    o = Array.from(document.getElementsByClassName(styles.op)),
    c = Array.from(document.getElementsByClassName(styles.content))
  ;

  async function sc1() {
    o.forEach( i => i.classList.remove(styles.invisible) );
    b.classList.remove(styles.mini);
  }
  async function sc2() {
    setTimeout(()=> a.classList.remove(styles.scLock), 200);
  }
  async function sc() {
    try{
      const res = await sc1();
      await sc2(res);
    } catch(err) {
    }
  }

  b.disabled = true;

  if (b.classList.contains(styles.mini)) {
    // ヘッダークリック時
    c.forEach( i => i.classList.replace(styles.visible, styles.invisible) );
    scroll({ top: 0, left: 0, behavior: 'smooth' });
    setTimeout(() => sc(), 400);
  } else {
    // 初回クリック時
    a.classList.add(styles.scLock);
    b.classList.add(styles.mini);
    scroll({ top: 0, left: 0, behavior: 'smooth' });
    setTimeout(() => scroll(0,0), 390);
    setTimeout(() => {
      scroll({ top: 0, left: 0, behavior: 'smooth' });
      o.forEach( i => i.classList.add(styles.invisible) );
      c.forEach( i => i.classList.replace(styles.invisible, styles.visible) );
    }, 400);
  }
  setTimeout(()=> {
    b.disabled = false;
    return;
  }, 400);
}

export function Thank() {
  const
    b = document.getElementById('blob'),
    e = Array.from( document.getElementsByClassName(styles.ed) ),
    c = Array.from( document.getElementsByClassName(styles.content) )
  ;
  b.classList.replace(styles.mini, styles.large);
  c.forEach( i => i.classList.replace(styles.visible, styles.invisible) );
  clearTimeout(m);
  m = setTimeout(function () {
    e.forEach( i => i.classList.remove(styles.invisible) );
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
