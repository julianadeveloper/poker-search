<template>
  
  <main class="container">
    <header>  
    <div> 
       <h4>{{ pokemon?.name.toUpperCase() }}</h4>
  <!-- <button @click.prevent="chamaDEtalhes">details</button> -->
    <figure> 
          <button class="search-pokemon" type="button" @click.prevent="openStats()">
          <div>           
       <img  class="image-pokemon"
          :src="pokemonImg">
            <img />  
          </div>

          </button>

        </figure>
      </div>
      <div>
  <ul>
    <li v-for="(stat, i) in pokemon.stats" :key="i">
 {{ stat.stat.name }} :   {{ stat.base_stat }}
    </li>
  </ul>
</div>
      </header>
      <body>
          <div>
          </div>
        </body>
    </main>

  </template>

<script lang="ts">
  import { ApiService } from '@/service/api';
import { defineComponent} from 'vue';

  export default defineComponent({
    name: 'PokemonDetails',
    props:{
      pokemon: {
        type: Object,
        required: true,
        stats: Array,
    
      },
    },
    data(){
      const apiService = new ApiService()
      const pokemonImg = "";

      return{isOpen:false, apiService, pokemonImg, pokemonLevel:0}
    },
     methods:{
      openStats() {
      return  this.isOpen = !this.isOpen
      },
    async chamaDEtalhes(){
        console.log('aqui')
       let response = await this.apiService.findPokemonByName(this.pokemon.name)
      this.pokemonImg = response.data.sprites.front_default;
      this.$props.pokemon.stats = response.data.stats
      }
    },

    async mounted(){
    await this.chamaDEtalhes();
    },

  });
  </script>

<style scoped lang="scss">
@import "../scss/pokemon-card.scss";
@import "../scss/input-search.scss";
ul{
  list-style: none;
}

  h3 {
    font-style: $fonts;
    color:$primary-color;
  }

  img {
    display: flex;
    width: $img-pokemon-width;
    justify-content: center;
    align-items: center;

  
  }

  .search-pokemon {
    background-color: $background-image;
    border: none;
    cursor: pointer;
  }

    .container {
      overflow: hidden;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: $width;
      height: $height;
      background-color: $background--color;
      border-radius: 16px;
      border: $border;
      padding: $spacing;
      margin: $margin;
      box-shadow: $shadow-card;

      @media screen and (min-width: 640px) {
        font-size: $font-size;
        width: $width;
        padding-bottom: $spacing;
      }
    }

</style>
