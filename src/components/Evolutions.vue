<template>
  <div>
    <h3>Evoluções</h3>
    <p>{{ pokemons }}</p>
    <p></p>
    <p></p>
    <button @click.prevent="toPrevious">Menos</button>
    <button @click.prevent="toNext">Proximo</button>

    <div>{{}}</div>
  </div>
</template>

<script lang="ts">
import { ApiService } from '@/service/api';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PokemonsEvolutions',
  data() {
    const apiService = new ApiService()
    return { apiService, limit: 10, nextOffset: 10, previousOffset: 0, pokemons: [], offset: 0 }
  },
  methods: {

    // showPokemons(limit: number, offset: number){
    //   this.apiService.listAll(this.offset, this.limit)

    // },
    async toNext() {
      this.offset = this.nextOffset;
      this.nextOffset += 10;
      this.previousOffset += 10;

      let response = await this.apiService.listAll(this.offset, this.limit)
      this.pokemons = response.data.results;

    },
    async toPrevious() {
      this.offset = this.previousOffset;
      this.nextOffset -= 10;
      this.previousOffset -= 10;
      let response = await this.apiService.listAll(this.offset, this.limit)
      this.pokemons = response.data.results;

    }
  },
  // mounted(){
  // this.showPokemons()
  // }
})


</script>
<style lang="scss">

</style>