<template>
   <div class="Wrapper">
        <label for="input" class="Input-label">Buscar Pokémon</label>
        <input :type="type" :value="modelValue" @input="searchValue"  id="input" class="Input-text" />
        
      </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseInput',
  props:{
  type: String || Number,
  modelValue: [String, Number]
 },
 methods:{
  searchValue(event: any){
   this.$emit('update:modelValue', event.target.value)
  }
 }
 })

</script>