<template>
  <q-splitter 
    v-model="splitterModel" 
    class="row bg-negative" 
    separator-class="bg-negative"
    separator-style="width: 3px"
    >
      <template v-slot:before>
        <menu-page class="col" />
      </template>

      <template v-slot:after>
        <project-page class="col" />
      </template>
  </q-splitter>
</template>

<script>
export default {
    data () {
        return {
            splitterModel: 50 // start at 50%
        }
    },
    components: {
        'menu-page': require('./MenuPage.vue').default,
        'project-page': require('./ProjectPage.vue').default
    }
}
</script>

<style>

</style>