<template>
  <div>
    <header-login />
    <div class="container-login">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'auth' // you can enter any name (optional)
};
</script>

<style>
/* your style */
</style>
