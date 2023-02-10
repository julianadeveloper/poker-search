<template>
  <div class="hello">
    <h1>{{ pokemon }}</h1>
    <button @click="findPokemonByName">Search</button>
  </div>
</template>

<script lang="ts">
import { ApiService } from '@/service/api';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const apiService = new ApiService()
    const pokemon = ref({
      // abilities: [{
      //   ability: {
      //     name: '',
      //     url: '',
      //   }
      // }],
      // ability: {
      //   name: "",
      // },
      // name: "",
      // url: ""

    })
    return { pokemon, apiService }
  },

  methods: {
    async findPokemonByName() {
      this.pokemon = await this.apiService.findPokemonByName()
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
