<script lang="ts">
  import Submit from "./Submit.svelte";
  import Tos from "./Tos.svelte";
  import RequiredLabel from "./RequiredLabel.svelte";
</script>

<template lang="pug">
  form(action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSd03E7BPIpR0Y9E-vfnlUTf2eU4J3OGripRMN_YrJGthUE89w/formResponse' method='post' target='hidden_iframe' onSubmit autocomplete='off')
    iframe.displayNone(id='hidden_iframe' name='hidden_iframe' title='hidden_iframe')

    label.column(for='title') 題名
      p.labelInfo 空欄は『無題』となります
      input#title(name='entry.1866521228' type='text' placeholder="『無題』")

    label.column(for='poem') 本文
      RequiredLabel
      textarea#poem(name='entry.1602729063' required)

    label.column(for='name') 著者名
      p.labelInfo 空欄は『匿名』となります
      input#name(name='entry.1285093387' type='text' placeholder="『匿名』")

    label.column(for='addition') 付記
      p.labelInfo 解説や補足などはこちらへ
      textarea#addition(name='entry.2007810462')

    label.column(for='link') リンク
      p.labelInfo SNSやサイトのURLはこちらへ
      input#link(name='entry.272121178' type='url' placeholder='https://')

    Tos.column
    Submit
</template>

<style lang="stylus">
  @import '../style/themeLight'
  @media (prefers-color-scheme: dark)
    @import '../style/themeDark'

  .displayNone
    display none
  form
    transition opacity 0.4s cubic-bezier(0.01, 0.3, 0.01, 1)
  .column
    display block
    position relative
    border-radius 12px
    margin-bottom 0.4em
    color theme-60
    background-color theme-10
    border 1px solid theme-40
    &:hover, &:focus-within
      color theme-90
    &:hover
      border-color theme-60-pink
    &:focus-within
      border-color theme-80-pink
</style>
