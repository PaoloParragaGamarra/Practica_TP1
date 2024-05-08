<script>
export default {
  name: 'toolbar-content',
  methods:{
    changeLanguage(lang){
      this.$i18n.locale = lang
    }
  }
}
</script>
<template>
  <div class="card" aria-label="The toolbar container">
    <pv-toolbar class="bg-cyan-700 p-5" aria-label="The toolbar content">
      <template #start>
        <h1>TechnoGym TechnoRun Analytics</h1>
      </template>
      <template #end class="end">
        <router-link to="/home" class="route-text" aria-label="Go to home">
          <span class="text-white text-xl"> {{$t('home')}} </span>
        </router-link>
        <span class="separator"></span> <!-- Aquí se agrega el espacio de separación -->
        <router-link to="analytics/health-checks" class="route-text" aria-label="Go to Health Checks">
          <span class="text-white text-xl"> {{$t('health_Checks')}} </span>
        </router-link>
        <div class="ml-4 flex gap-3">
          <pv-button class="bg-black-alpha-70 text-white border-transparent" @click="changeLanguage('en')" aria-label="Translate english"> EN </pv-button>
          <pv-button class="bg-black-alpha-70 text-white border-transparent" @click="changeLanguage('es')" aria-label="Translate spanish"> ES </pv-button>
        </div>
      </template>
    </pv-toolbar>
  </div>
</template>

<style scoped>

.route-text {
  text-decoration: none;
}

.route-text:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: ease-in 0.3s;
}

.separator {
  margin-left: 20px; /* Ajusta este valor según el espacio que desees entre los enlaces */
}

</style>
