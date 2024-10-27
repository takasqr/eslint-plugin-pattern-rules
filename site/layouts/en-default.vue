<template>
  <div class="bg-white">
    <HeaderView />

    <Container class="md:mt-6 lg:mt-10 xl:mt-16 mb-16 md:mb-28">
      <slot />
    </Container>

    <FooterView />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import FooterView from '../components/custom/general/footer/en-footer-view.vue'
import HeaderView from '../components/custom/general/header/en-header-view.vue'
import Container from '@takasqr/tw-vue-ui/basic/container/Container.vue'

useHead({
  htmlAttrs: {
    lang: 'en',
    prefix: 'og: https://ogp.me/ns#',
  },
})
</script>
