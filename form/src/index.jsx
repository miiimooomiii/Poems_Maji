import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import styles from './App.module.css';

render(App, document.getElementById('root'));

const txH = 108;
const tx = document.getElementsByTagName('textarea');
const rq = document.getElementsByClassName(styles.required);

function OnInput() {
  this.style.height = 'auto';
  if (this.scrollHeight > txH) this.style.height = (this.scrollHeight) + 'px';
  else this.style.height = txH + 'px';
}

function OnInputRequired() {
  if (this.value == '') rq[0].classList.remove(styles.filled);
  else rq[0].classList.add(styles.filled);
}

tx[0].addEventListener('input', OnInputRequired, false);

for (let i = 0; i < tx.length; i++) {
  if (tx[i].value == '') tx[i].setAttribute('style', 'height:' + txH + 'px;overflow-y:hidden;');
  else tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
  tx[i].addEventListener('input', OnInput, false);
}
