<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">Comments</h1>
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
      <div v-for="comment in props.data" :key="comment.id" class="p-4 bg-gray-100 shadow rounded">
        <h2 class="text-lg font-bold mb-2">{{ comment.name }}</h2>
        <p class="text-gray-500 font-semibold text-sm mb-2">{{ comment.email }}</p>
        <p>{{ comment.body }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
const props = defineProps<{
  data: Comment[];
}>();
</script>
