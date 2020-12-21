<template>
  <q-page class="q-py-lg">

    <no-tasks
    v-if="!Object.keys(tasksTodo).length"
    ></no-tasks>
    
    <tasks-todo
    v-else
    :tasksTodo="tasksTodo"
    />

    <tasks-complete
    v-if="Object.keys(tasksCompleted).length"
    :tasksCompleted="tasksCompleted"
    class="q-mt-lg"
    />


    <div class="absolute-bottom-right text-center q-mb-lg q-mr-lg">
      <q-btn
      @click="showAddTask = true"
      round
      dense
      color="primary"
      size="24px"
      icon="add"
      />
    </div>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false"/>
    </q-dialog>
  </q-page>
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
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted'])
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
    'no-tasks': require('components/Tasks/NoTasks.vue').default
  }
}
</script>

<style>
  
</style>