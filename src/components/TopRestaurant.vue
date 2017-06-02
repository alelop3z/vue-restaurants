<template>
  <h1>{{ title }} {{ id_restaurant }}</h1>
</template>

<script>
  export default {
    name: 'top-restaurants',
    mounted () {
      this.id_restaurant = this.$route.params.id;
    },
    data(){
      return {
        id_restaurant: null,
        title: 'Restaurantes top'
      }
    }
  }
</script>
