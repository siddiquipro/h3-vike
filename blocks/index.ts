import { defineAsyncComponent } from "vue";

export default {
  comments: defineAsyncComponent(() => import("./comments.vue")),
  posts: defineAsyncComponent(() => import("./posts.vue")),
  users: defineAsyncComponent(() => import("./users.vue")),
  todos: defineAsyncComponent(() => import("./todos.vue")),
};
