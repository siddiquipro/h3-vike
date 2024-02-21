<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">ToDos</h1>
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
      <div v-for="todo in props.data" :key="todo.id" class="p-4 bg-gray-100 shadow rounded">
        <h2 class="text-lg font-bold mb-2">{{ todo.title }}</h2>
        <p>{{ todo.completed }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const props = defineProps<{
  data: Todo[];
}>();
</script>
