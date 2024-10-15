<template>
  <div>
    <p>Redirecting...</p>
    <a href="/en/">English</a>
    <a href="/ja/">日本語</a>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from '#app';

const router = useRouter();

onMounted(() => {
  router.push('/en');
});
</script>