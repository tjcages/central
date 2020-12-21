<template>
    <div>
        <list-header
        bgColor="bg-info"
        >Completed</list-header>
        <q-list 
        bordered
        separator
        >
        
        <task
            v-for="(task, key) in tasksCompleted"
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
    props: ['tasksCompleted'],
    components: {
      'task': require('components/Tasks/Task.vue').default,
      'list-header': require('components/Shared/ListHeader.vue').default
    }
}
</script>

<style>

</style>