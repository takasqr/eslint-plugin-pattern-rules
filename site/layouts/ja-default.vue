<template>
  <div class="bg-white">
    <HeaderView />
    <slot />
    <FooterView />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import FooterView from '../components/custom/general/footer/ja-footer-view.vue'
import HeaderView from '../components/custom/general/header/ja-header-view.vue'

useHead({
  htmlAttrs: {
    lang: 'ja',
    prefix: 'og: https://ogp.me/ns#',
  },
})
</script>
