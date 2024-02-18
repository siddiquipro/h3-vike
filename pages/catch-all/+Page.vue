<template>
  <div>
    <h1>Default Page for all routes</h1>
    <pre>{{ dataOption }}</pre>
  </div>
</template>

<script setup lang="ts">
import { useData } from "vike-vue/useData";

const dataOption = useData<any>();
</script>
