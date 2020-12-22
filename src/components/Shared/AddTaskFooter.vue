<template>
  <div class="row bg-grey-3 absolute-bottom q-pa-lg">
      <modal-task-name 
        :name.sync="taskToSubmit.name"
        ref="modalTaskName"
        class="q-ml-lg"
      />
      <q-space />
      <q-btn
        @click="showAddTask = true"
        round
        dense
        color="primary"
        size="24px"
        icon="add"
        class="q-mr-lg"
      />
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import ModalButtons from '../Tasks/Modals/Shared/ModalButtons.vue'
    import ModalDueDate from '../Tasks/Modals/Shared/ModalDueDate.vue'
    import ModalDueTime from '../Tasks/Modals/Shared/ModalDueTime.vue'
    import ModalHeader from '../Tasks/Modals/Shared/ModalHeader.vue'
    import ModalTaskName from '../Tasks/Modals/Shared/ModalTaskName.vue'

    export default {
        data() {
            return {
                taskToSubmit: {
                    name: '',
                    description: '',
                    dueDate: '',
                    dueTime: '',
                    completed: false
                }
            }
        },
        methods: {
            ...mapActions('tasks', ['addTask']),
            submitForm() {
                this.$refs.modalTaskName.$refs.name.validate()
                if (!this.$refs.modalTaskName.$refs.name.hasError){
                    this.submitTask()
                }
            },
            submitTask() {
                this.addTask(this.taskToSubmit)
                this.$emit('close')
            },
            clearDueDate() {
                this.taskToSubmit.dueDate =''
                this.taskToSubmit.dueTime =''
            }
        },
        components: {
            'modal-header': require ('../Tasks/Modals/Shared/ModalHeader.vue').default,
            'modal-task-name': require ('../Tasks/Modals/Shared/ModalTaskName.vue').default,
            'modal-due-date': require ('../Tasks/Modals/Shared/ModalDueDate.vue').default,
            'modal-due-time': require ('../Tasks/Modals/Shared/ModalDueTime.vue').default,
            'modal-buttons': require ('../Tasks/Modals/Shared/ModalButtons.vue').default
        }
    }
</script>

<style>

</style>