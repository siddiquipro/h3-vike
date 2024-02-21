<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">Users</h1>
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
      <div v-for="user in props.data" :key="user.id" class="p-4 bg-gray-100 shadow rounded">
        <h2 class="text-lg font-bold mb-2">{{ user.name }}</h2>
        <p>{{ user.email }}</p>
        <p>{{ user.phone }}</p>
        <p>{{ user.website }}</p>
        <!-- website -->
        <p>{{ user.address.street }}, {{ user.address.suite }}, {{ user.address.city }}, {{ user.address.zipcode }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const props = defineProps<{
  data: User[];
}>();
</script>
