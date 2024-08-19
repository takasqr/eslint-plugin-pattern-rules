<template>
  <NuxtLayout>
    <Button @click="setLocale('en')">{{ $t('welcome') }}</Button>


    <div class="bg-white">
    <!-- Header -->
    <HeaderView />

    <main>
      <!-- Hero section -->
      <div class="z-0 relative">
        <HeroSection />
      </div>

      <!-- <Screenshot /> -->

      <Container class="z-30 relative">
        <FAQ />
      </Container>
    </main>
  </div>


</NuxtLayout>
</template>

<script setup lang="ts">
import { Button } from "@wingui/vue"
import { ref } from 'vue'
import Screenshot from '~/components/Screenshot.vue';
import Footer from '@takasqr/tw-vue-ui/custom/general/CustomFooter.vue'
import Container from '@takasqr/tw-vue-ui/basic/container/Container.vue'

const mobileMenuOpen = ref(false)
const { locale, setLocale } = useI18n()

definePageMeta({
  layout: 'default'
})
</script>