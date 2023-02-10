<template>
  <div class="evolutions">
    <PokemonsEvolutions />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PokemonsEvolutions from '@/components/Evolutions.vue'; 

export default defineComponent({
  name: 'EvolutionsView',
  components: {
    PokemonsEvolutions,
  },
});
</script>
