<template>
  <div>
    <nav>
      <div id="nav">
        <div id="nav-bar">
          <router-link to="/">Home</router-link>|
          <router-link to="/about">About</router-link>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
    <footer>This is footer</footer>
  </div>
</template>

<script>
export default {
  name: 'defaultLayout' // you can enter any name (optional)
};
</script>

<style>
/* your style */
</style>
