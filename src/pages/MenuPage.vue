<template>
  <q-page class="q-pa-lg bg-negative">
    <q-page-container flex class="column q-mx-lg q-mt-xl">
      <span class="text-bold text-h4 text-white">Hi Samantha</span>
      <span class="text-subtitle1 text-grey-5 q-mt-sm">Welcome back to your workspace!</span>
      <q-input 
        standout 
        bg-color="info" 
        v-model="text" 
        dense 
        class="q-mt-lg text-subtitle1" 
        label="Search" 
        label-color="grey-5"
      >
        <template v-slot:prepend>
          <q-icon name="search" color="white" />
        </template>
      </q-input>

      <q-page-container class="q-mt-lg">
        <span class="text-h6 text-white q-mr-md">Projects</span>
        <span class="text-subtitle1 text-grey-5">(13)</span>
        
        <div class="q-pt-lg">
          <div class="row q-gutter-x-lg q-mb-xl" v-for="n in 2" :key="n">
            <div v-for="n in 3" :key="n" class="q-pa-xs">
              <q-btn
                padding="xl"
                color="primary"
                label="CP"
                class="text-h5 text-bold"
              />  
              <q-item-label class="text-center text-subtitle2 text-grey-5 q-mt-md">Cyber Punk</q-item-label>
            </div>
          </div>
        </div>
      </q-page-container>
    </q-page-container>
  </q-page>
</template>

<script>
    export default {
      data() {
        return {
          text:''
        }
      }
    }
</script>

<style>
  .standout {
    background:"white";
  }
</style>