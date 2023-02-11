<template>
  <div class="home">
    <Card />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from '@/components/PokemonCard.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    Card,
  },
});
</script>
<style lang="scss">
@import "@/scss/global.scss";

</style>
