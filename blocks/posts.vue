<template>
  <h1 class="text-3xl font-bold mb-4">Posts</h1>
  <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
    <div v-for="post in props.data" :key="post.id" class="p-4 bg-gray-100 shadow rounded">
      <h2 class="text-lg font-bold mb-2">{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Post {
  id: number;
  title: string;
  body: string;
}

const props = defineProps<{
  data: Post[];
}>();
</script>
