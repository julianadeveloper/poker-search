<template>
  <div>
    <h1>Seja bem vindo(a) ao PokeBase</h1>
    <subtitle>Interface preparada para consumir a API da PokéApi</subtitle>
    <div>
    <div>
      <h3 v-for="(data, i) in pokemon.forms" :key="i">{{data.name}}</h3>
      <img :src="pokemon.sprites.front_default"><img/>
    </div>
      <p>{{ pokemon.id }}</p>
    </div>
    <input v-model="pokemon.name" />
    <button @click.prevent="findPokemonByName(pokemon.name)">Search</button>
  </div>
</template>

<script lang="ts">
import { ApiService } from '@/service/api';
import { defineComponent, ref } from 'vue';
import {Pokemon} from '../interface/pokemon'

export default defineComponent({
  name: 'CardPokemon',
  setup() {
    const apiService = new ApiService()
    const pokemon = ref<Pokemon>({
      id: 0,
      name: "",
      base_experience: 0,
      height: 0,
      is_default: false,
      order: 0,
      weight: 0,
      abilities: [
        {
          is_hidden: false,
          slot: 0,
          ability: {
            name: "",
            url: "",
          },
        }
      ],
      forms:
        [{
          name: "",
          url: "",
        }],
      location_area_encounters: "",
      moves: [
        {
          move: {
            name: "",
            url: "",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              version_group: {
                name: "",
                url: "",
              },
              move_learn_method: {
                name: "",
                url: "",
              },
            }
          ],
        }
      ],
      sprites:
        {front_default: ""},
      species: {
        name: "",
        url: "",
      },
    })
    return { pokemon, apiService }
  },

  methods: {
    async findPokemonByName(name: string) {
      const response = await this.apiService.findPokemonByName(name)
      return this.pokemon = response.data;

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
