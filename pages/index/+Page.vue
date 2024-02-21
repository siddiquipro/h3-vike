<template>
  <div class="grid gap-4">
    <h1 class="text-3xl font-bold">My Vike app</h1>

    <div>
      <div class="font-medium">This page is:</div>
      <ul class="or pl-4">
        <li>Rendered to HTML.</li>
        <li>Interactive.</li>
      </ul>
    </div>
    <Counter />
  </div>
</template>

<script lang="ts">
import Counter from "../../components/Counter.vue";

const components = { Counter };
export default { components };
</script>
