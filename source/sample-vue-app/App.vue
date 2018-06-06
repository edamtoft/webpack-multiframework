<template>
  <div>
    <nav-menu></nav-menu>
    <main class="container mt-4">
      <h1>{{message}} From Vue</h1>
    </main>
  </div>
</template>
<script>
  import Menu from "./Menu";
  import strings from "shared/strings";

  export default {
    components: {
      "nav-menu": Menu
    },
    data() {
      return {
        message: strings.HELLO_WORLD
      }
    }
  };
</script>