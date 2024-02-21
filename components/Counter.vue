<template>
  <div class="flex gap-4 items-center">
    <button class="px-4 py-1 bg-indigo-800 text-white rounded" @click="doubleCount">Double Count</button>
    <p>Count: {{ count }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const count = ref(0);
const doubleCount = () => {
  count.value = count.value + 2;
};
</script>
