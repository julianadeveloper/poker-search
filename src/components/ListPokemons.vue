<template>
  <div>
    <h3>Pokemons</h3>
    <InputPokemon v-model="pokemon.name" />
    <button @click="findPokemonByIdOrName(pokemon.name)">Search</button>

<div>
  <Card />
</div>
     </div>
</template>

<script lang="ts">
import { ApiService } from '@/service/api';
import { defineComponent } from 'vue';
import InputPokemon from '@/components/InputSearch.vue'
export default defineComponent({
  name: 'AllPokemonsList',
  components:{
    InputPokemon,
  },
  data() {
    const apiService = new ApiService()
    return { apiService, pokemon: {name: "", }}
  },
  methods: {
    async findPokemonByIdOrName(param: string) {
        const response = await this.apiService.findPokemonByName(param)
        return this.pokemon = response.data;

      },
      },
})


</script>
<style lang="scss">

</style>