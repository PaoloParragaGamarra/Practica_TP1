<script>

export default {
  name: 'notfound-page',
}
</script>

<template>
  <div class="the-notfound-manager" aria-label="The notfound page content">
    <h1> Page Not Found </h1>
    <h4> Warning</h4>
    <router-link to="/home">
      <pv-button class="bg-cyan-600 border-transparent pl-5 pr-5 py-3 border-round-3xl"> Back Home </pv-button>
    </router-link>
  </div>
</template>

<style scoped>
.the-notfound-manager {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  color: #333;
}

</style>