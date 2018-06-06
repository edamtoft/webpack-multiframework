<template>
  <div class="container">
    <h1>{{message}} From Vue</h1>
  </div>
</template>
<script>
  import strings from "shared/strings";

  export default {
    data() {
      return {
        message: strings.HELLO_WORLD
      }
    }
  };
</script>