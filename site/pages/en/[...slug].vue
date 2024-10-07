<template>
  <NuxtLayout>
    <div class="bg-white px-6 py-32 lg:px-8">
      <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <main>
          <ContentDoc v-slot="{ doc }">
            <article class="prose lg:prose-xl">
              <!-- <h1>{{ doc.title }}</h1> -->
              <ContentRenderer :value="doc" />
            </article>
          </ContentDoc>
        </main>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'en-default'
})
</script>