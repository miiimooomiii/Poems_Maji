import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import styles from './App.module.css';

render(App, document.getElementById("root"));

const txHeight = 108;
const tx = document.getElementsByTagName('textarea');
const cb = document.getElementById('check');
const rq = document.getElementsByClassName(styles.required);

function OnInput() {
  this.style.height = 'auto';
  if (this.scrollHeight > txHeight) {
    this.style.height = (this.scrollHeight) + 'px';
  } else {
    this.style.height = txHeight + 'px';
  }
}

function OnInputRequired() {
  if (this.value == '') {
    rq[0].classList.remove(styles.filled);
  } else {
    rq[0].classList.add(styles.filled);
  }
}

function OnInputRequired1() {
  if (this.checked) {
    rq[1].classList.add(styles.filled);
  } else {
    rq[1].classList.remove(styles.filled);
  }
}

tx[0].addEventListener('input', OnInputRequired, false);
cb.addEventListener('input', OnInputRequired1, false);

for (let i = 0; i < tx.length; i++) {
  if (tx[i].value == '') {
    tx[i].setAttribute('style', 'height:' + txHeight + 'px;overflow-y:hidden;');
  } else {
    tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
  }
  tx[i].addEventListener('input', OnInput, false);
}
