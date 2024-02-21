<template>
  <div class="max-w-2xl w-full">
    <div class="flex items-center justify-between">
      <h1 class="text-sm text-gray-500">Default Page for all routes</h1>
    </div>

    <div v-if="hasBlock && pageData.data">
      <component :is="getBlockComp()" :data="pageData.data" />
    </div>

    <div v-else>
      <p>No block found for {{ block }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from "vike-vue/useData";
import { computed } from "vue";
import blocks from "../../blocks";

const pageData = useData<any>();

const blockNames = Object.keys(blocks);
const block = pageData?.name as keyof typeof blocks | undefined;

const hasBlock = computed(() => {
  if (!block) return false;
  return blockNames.includes(block);
});

const getBlockComp = () => {
  if (!block) return null;
  return blocks[block];
};
</script>
