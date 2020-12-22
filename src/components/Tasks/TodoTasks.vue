<template>
  <div>
    <list-header
    >Upcoming</list-header>
      <q-list>
        <task
          v-for="(task, key) in tasksToday"
          :key="key"
          :task="task"
          :id="key"
        ></task>
      </q-list>
  </div>
</template>

<script>
import ListHeader from '../Shared/ListHeader.vue'
export default {
    props: ['tasksToday'],
    components: {
      'task': require('components/Tasks/Task.vue').default,
      'list-header': require('components/Shared/ListHeader.vue').default
    }
}
</script>

<style>

</style>