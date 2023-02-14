<template>
  <div class="home">
    <ListPokemons/>
    <div class="teste">
       <div class="poke-list" v-for="pokemon of pokemons" :key="pokemon.id"> 
        <Card :pokemon="pokemon"/>
</div>
    </div>
    <button @click="toPrevious">Menos</button>
       <button @click="toNext">Proximo</button>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import Card from '@/components/PokemonCard.vue';
import { ApiService } from '@/service/api';
import ListPokemons from '@/components/ListPokemons.vue'
import { Pokemon } from '@/interface/pokemon';
export default defineComponent({
  name: 'HomeView',
  components: {
    Card,
    ListPokemons,
  },
 
  data(){
     const apiService = new ApiService()
     return {apiService, isOpen: false, limit: 10, nextOffset: 10, previousOffset: 0, offset: 0, pokemons:[] as Array<Pokemon>}
},    
    // },
    methods: {
      async findPokemonDetails(id: number) {
        const response = await this.apiService.findDetailsById(id)
        return this.pokemons = response.data;

      },
      
      async toNext() {

      this.offset = this.nextOffset;
      this.nextOffset += 10;
      this.previousOffset += 10;
      this.pokemons = []
      let response = await this.apiService.listAll(this.offset, this.limit)
      this.pokemons = response.data.results;

    },
    async toPrevious() {
      this.offset = this.previousOffset;
      this.nextOffset -= 10;
      this.previousOffset -= 10;
      this.pokemons = []
      let response = await this.apiService.listAll(this.offset, this.limit)
      this.pokemons = response.data.results;

    },
  },

  async mounted() {
   await  this.toPrevious()
  }

});



</script>
<style lang="scss">
.teste{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  flex-wrap: wrap;

}
.poke-list{
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
}
</style>
