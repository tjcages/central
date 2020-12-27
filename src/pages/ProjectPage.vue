<template>
<q-page-container>
  <q-page class="column bg-white q-py-xl q-px-md">
    <span class="text-bold text-h4 text-black q-ml-md">Cyber Punk</span>
    <span class="text-subtitle1 text-grey-6 q-mt-sm q-ml-md">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</span>

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