<script >

export default {
  name: 'health-check-record-card',
  data(){
    return {
      treadmillData: null

    }
  }
}
</script>

<template>
<pv-card>
  <template #title class="card-title">Average Performance</template>
  <template #content>
    <p class="m-0">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
      quas!
    </p>
  </template>

</pv-card>
</template>

<style scoped>
.card-title {
  margin-bottom: 10px; /* Ajusta el margen inferior según sea necesario */
}
</style>