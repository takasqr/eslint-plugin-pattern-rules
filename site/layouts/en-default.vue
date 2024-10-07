<template>
  <div class="bg-white">
    <HeaderView />
    <slot />
    <FooterView />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import FooterView from '../components/custom/general/footer/en-footer-view.vue'
import HeaderView from '../components/custom/general/header/en-header-view.vue'

useHead({
  htmlAttrs: {
    lang: 'en',
    prefix: 'og: https://ogp.me/ns#',
  },
})
</script>
