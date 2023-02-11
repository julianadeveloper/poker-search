<template>
    <main class="container-card">
      <div class="Wrapper">

        <label for="input" class="Input-label">Buscar Pokémon</label>
        <input id="input" class="Input-text" v-model="pokemon.name" />
        <button @click.prevent="findPokemonByIdOrName(pokemon.name)">Search</button>
        
      </div>
 <body class="content">
  <header>  
     <h3 v-for="(data, i) in pokemon.forms" :key="i">{{ data.name.toUpperCase() }}</h3>
      <p> Pokemon ID: {{ pokemon.id }}</p>
   
        <figure> 
          <button class="search-pokemon" type="button" @click.prevent="openStats()">
            <img class="image-pokemon"
              :src="pokemon.sprites.front_default">
              <img /> 
            </button>
        </figure>
      </header>
        <body v-if="isOpen">
          <div v-for="(data, i) in pokemon.stats" :key="i">
            <span>{{ data.stat.name }}: <span>{{ data.base_stat }}</span> </span>
          </div>
        </body>
        <div> <button @click="showEvolution">Evolution</button></div>

      </body>
    </main>

  </template>

<script lang="ts">
  import { ApiService } from '@/service/api';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'PokemonDetails',
    data(){
     return {isOpen: false, }
},
    setup() {
      const apiService = new ApiService()
      const pokemon = ref({
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
        stats: [
          {
            base_stat: 0,
            effort: 0,
            stat: {
              name: "",
            }
          }
        ],
        sprites:
          { front_default: "" },
        species: {
          name: "",
          url: "",
        },
      })

      return { pokemon, apiService}
    },
    methods: {
      async findPokemonByIdOrName(param: string) {
        const response = await this.apiService.findPokemonByName(param)
        return this.pokemon = response.data;

      },
      async findPokemonDetails(id: number) {
        const response = await this.apiService.findDetailsById(id)
        return this.pokemon = response.data;

      },
      openStats() {
      return  this.isOpen = !this.isOpen
      },
      showEvolution(){
        return this.apiService.findPokemonEvolutions(this.pokemon.id)
      }
    }
  });
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/pokemon-card.scss";
@import "../scss/input-search.scss";


  h3 {
    font-style: $fonts;
    color:$primary-color;
  }

  img {
    display: flex;
    width: $img-pokemon-width;
    justify-content: center;
    align-items: center;
    /* box-shadow: $shadow-card; */
  
  }

  .search-pokemon {
    background-color: $background-image;
    border: none;
    cursor: pointer;
  }

    .content {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: $width;
      height: $height;
      background-color: $background--color;
      border-radius: 16px;
      border: $border;
      padding: $spacing;
      margin: $margin;
      box-shadow: $shadow-card;

      @media screen and (min-width: $responsive-min-width) {
        font-size: $font-size;
        width: $width;
        padding-bottom: $spacing;
      }
    }

    .Wrapper {
      max-width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
}
.Input-text {
  margin: 1rem;
  width: $width-input;
  height: $height-input;
  border: $border;
  border-radius: $radius;
}

.Input-text:focus {
  width: $width-input;
  height: $height-input;
  background-color: $background;
  outline: $outline;
}

.container-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
</style>
