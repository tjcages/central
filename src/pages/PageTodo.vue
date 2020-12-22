<template>
  <div class="q-py-lg">

    <no-tasks
    v-if="!Object.keys(tasksToday).length"
    ></no-tasks>
    
    <tasks-todo
      v-else
      :tasksToday="tasksToday"
    />

    <tasks-complete
      v-if="Object.keys(tasksUpcoming).length"
      :tasksUpcoming="tasksUpcoming"
      class="q-mt-lg"
    />


    <add-task-footer />

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false"/>
    </q-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      showAddTask: false
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasksToday', 'tasksUpcoming'])
  },
  mounted() {
    this.$root.$on('showAddTask', () => {
      this.showAddTask = true
    })
  },
  components: {
    'task': require('components/Tasks/Task.vue').default,
    'tasks-todo': require('components/Tasks/TodoTasks.vue').default,
    'tasks-complete': require('components/Tasks/CompletedTasks.vue').default,
    'add-task': require('components/Tasks/Modals/AddTask.vue').default,
    'no-tasks': require('components/Tasks/NoTasks.vue').default,
    'add-task-footer': require('components/Shared/AddTaskFooter.vue').default
  }
}
</script>

<style>
  
</style>