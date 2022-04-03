<script lang="ts">
  import { onMount } from "svelte";
  import smoothscroll from "smoothscroll-polyfill";

  // コンポーネント
  import Tapestry from "./lib/Tapestry.svelte";
  import Header from "./lib/Header.svelte";
  import Footer from "./lib/Footer.svelte";
  import Form from "./lib/form/Form.svelte";
  import Thank from "./lib/thank/Thank.svelte";

  import logo from "./assets/logo.svg";

  smoothscroll.polyfill();

  // #main内コンポーネント
  const pages = [{ component: Form }];
  let selected = pages[0];

  let visibility: { [key: string]: boolean } = {
    front: false,
    content: true,
    thanks: false,
  };

  onMount(() => {});
</script>

<template lang="pug">
  main
    Tapestry
    div#front(class="{visibility.front ? 'visible' : 'invisible'}")
      img.logo(src='{logo}', alt='Logo')
    div#content(class="{visibility.content ? 'visible' : 'invisible'}")
      Header
      <svelte:component this={selected.component}/>
      Footer
    div#thanks(class="{visibility.thanks ? 'visible' : 'invisible'}")
      Thank
</template>

<style lang="stylus">
  @import './lib/style/themeLight'
  @media (prefers-color-scheme: dark)
    @import './lib/style/themeDark'

  :root
    font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    background-color theme-10

  main
    text-align center
    min-height 100%
    overflow auto
    display block
  div#front
    position fixed
  div#content
    margin-top 10vh
    margin-left auto
    margin-right auto
    width 92vw
    min-width 10em
    min-height 90%
    max-width 50em
  .logo
    height 24vmin
    min-height 60px
    position fixed
    pointer-events none
    user-select none
    transform translate(calc(50vw - 50%), calc(50vh - 50%))
    transition all 0.4s cubic-bezier(0.01, 0.3, 0.01, 1)

  div:global(.visible)
    pointer-events auto
    opacity 100%
  div:global(.invisible)
    pointer-events none
    user-select none
    opacity 0%
</style>
