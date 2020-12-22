<template>
  <q-splitter 
    class="row bg-negative" 
    separator-class="bg-negative"
    separator-style="width: 3px"
    >
      <template v-slot:before>
        <q-page>
          <menu-page class="col" />
        </q-page>
      </template>

      <template v-slot:after>
        <q-page>
          <project-page class="col" />
        </q-page>
      </template>
  </q-splitter>
</template>

<script>
export default {
    data () {
        return {
            splitterModel: 50 // start at 50% ___ Not implemented: v-model="splitterModel" 
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