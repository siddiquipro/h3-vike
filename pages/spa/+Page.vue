<template>
  <div>
    <h1>Star Wars</h1>
    <p>There are {{ total }} movies in the Star Wars series.</p>
    <div v-for="i in 10">Star Wars: Episode {{ i }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const total = ref(10);
</script>
