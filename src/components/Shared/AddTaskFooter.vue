<template>
  <div class="col bg-grey-3 absolute-bottom q-pb-lg q-pt-sm q-px-sm">
    <div class="row q-mx-md q-my-sm">
      <q-button 
        :v-if="timeSelected == 'Now'"
        size="md" 
        icon="hourglass_empty"
        class="q-pa-md text-color-primary text-weight-bold text-primary"
        text-color="primary"
        style="border: 1.5px solid #3696FF"
       >
        Now
      </q-chip>
      
      <q-chip 
        size="md" 
        icon="schedule"
        class="q-pa-md"
       >
        Later Today
      </q-chip>
      
      <q-chip 
        size="md" 
        icon="today"        
        class="q-pa-md"
       >
        Tomorrow
      </q-chip>
    </div>      
    <div class="row q-mb-sm">
      <modal-task-name 
        :name.sync="taskToSubmit.name"
        ref="modalTaskName"
        class="q-mx-lg"
      />
      <q-btn
        @click="showAddTask = true"
        round
        dense
        color="primary"
        size="24px"
        icon="add"
        class="q-mx-lg"
      />
    </div>''    
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
                },
                timeSelected: 'Now'
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