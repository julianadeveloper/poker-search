<template>
  <div>
    <h3>Evoluções</h3>
<button @click.prevent="showPokemons(limit, 10)">Proximo</button>
  </div>
</template>

<script lang="ts">
import { ApiService } from '@/service/api';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PokemonsEvolutions',
setup() {
    const apiService = new ApiService()
    let limit = 10; 
    let offset = limit + limit;
    return { apiService, limit, offset}
},
methods:{
  searchEvolution(id: number){
    this.apiService.findPokemonEvolutions(id)
  },
  showPokemons(limit: number, offset: number){
    this.limit = limit + 10;
    this.offset = offset + limit;
    this.apiService.listAll(limit, offset)
  
  }
},
// mounted(){
//  console.log(this.showPokemons())
// }
})


</script>
<style lang="scss">

</style>