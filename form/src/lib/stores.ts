import { onDestroy } from 'svelte'
import { writable } from 'svelte/store'

// Initial theme config from current state
export let theme = writable(false)
$: theme = writable(window.matchMedia('(prefers-color-scheme: dark)').matches)
