<template>
  <NuxtLayout>
    <div class="text-base leading-7 text-gray-700">
      <main>
        <ContentDoc v-slot="{ doc }">
          <article class="prose lg:prose-xl">
            <!-- <h1>{{ doc.title }}</h1> -->
            <ContentRenderer :value="doc" />
          </article>
        </ContentDoc>
      </main>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'ja-default'
})
</script>