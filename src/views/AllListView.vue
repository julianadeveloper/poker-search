<template>
  <div>
    <AllPokemonsList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AllPokemonsList from '@/components/ListAllPokemons.vue'; 

export default defineComponent({
  name: 'AllPokemons',
  components: {
    AllPokemonsList,
  },
});
</script>
