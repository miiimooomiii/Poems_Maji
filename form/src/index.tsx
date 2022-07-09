import { render } from 'solid-js/web'

import './index.css'
import App from './app'
import styles from './app.module.styl'

render(() => <App />, document.getElementById("root") as HTMLElement)

const textareaHeight = 108
const textarea = document.getElementsByTagName('textarea')
const requiredText = document.getElementsByClassName(styles.requiredText)

function onInput(this: HTMLElement) {
  this.style.height = 'auto'
  if (this.scrollHeight > textareaHeight) this.style.height = (this.scrollHeight) + 'px'
  else this.style.height = textareaHeight + 'px'
}

function onInputRequired(this: HTMLInputElement)  {
  if (this.value.replaceAll("　", "").trim() == '') this.classList.remove(styles.filled)
  else this.classList.add(styles.filled)
}

for (const item of textarea) {
  if (item.value == '') item.setAttribute('style', 'height:' + textareaHeight + 'px;overflow-y:hidden;')
  else item.setAttribute('style', 'height:' + (item.scrollHeight) + 'px;overflow-y:hidden;')
  item.addEventListener('input', onInput, false)
}

for (const item of requiredText) {
  item.addEventListener('input', onInputRequired, false)
}
