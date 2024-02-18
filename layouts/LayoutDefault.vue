<template>
  <div class="layout">
    <Sidebar>
      <Logo />
      <Link href="/"> Welcome </Link>
      <Link href="/star-wars"> Data Fetching </Link>
      <Link href="/create"> Create </Link>
      <Link href="/update"> Update </Link>
    </Sidebar>
    <Content>
      <slot />
    </Content>
  </div>
</template>

<script lang="ts" setup>
import Content from "../components/Content.vue";
import Link from "../components/Link.vue";
import Logo from "../components/Logo.vue";
import Sidebar from "../components/Sidebar.vue";
</script>

<style>
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background-color: #f0f0f0;
}

* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
</style>

<style scoped>
.layout {
  display: flex;
  max-width: 900px;
  margin: auto;

  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.content {
  padding: 20px;
  padding-bottom: 50px;
  min-height: 100vh;
  flex-grow: 1;
}
/* Page Transition Animation */
#page-content {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}
body.page-is-transitioning #page-content {
  opacity: 0;
}
</style>
