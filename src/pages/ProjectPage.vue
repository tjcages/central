<template>
  <q-page-container>
    <q-page class="column bg-white q-pa-xl">
    <span class="text-bold text-h5 text-black">Cyber Punk</span>
    <span class="text-subtitle1 text-grey-6 q-mt-sm">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</span>

    <todo-list class="q-mt-lg"/>
    </q-page>
  </q-page-container>
</template>

<script>
export default {
    components: {
        'todo-list': require('./PageTodo.vue').default
    }
}
</script>

<style>
    .corner {
        border-radius: 16px;
    }
</style>