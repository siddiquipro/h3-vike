<template>
  <div>
    <h1>Default Page for all routes</h1>
    <div>
      <p>Count: {{ count }}</p>
      <button @click="doubleCount">Double Count</button>
    </div>

    <pre>{{ dataOption }}</pre>
  </div>
</template>

<script setup lang="ts">
import { useData } from "vike-vue/useData";
import { onMounted, ref } from "vue";

const dataOption = useData<any>();

const count = ref(0);

const doubleCount = () => {
  count.value = count.value + 2;
};

onMounted(() => {
  console.log("mounted catch-all page");
  doubleCount();
});
</script>
