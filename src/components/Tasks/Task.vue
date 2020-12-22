<template>
    <q-item 
        style="height: 56px;"
        @click="updateTaskFunc(id, task)"
        clickable
        :class="!task.completed ? 'white' : 'white'"
        >
        <q-item-section side>
            <q-checkbox 
                v-model="task.completed" 
                color="secondary" 
                size="lg"
            />
        </q-item-section>

        <q-item-section>
            <q-item-label class="text-subtitle1">
            {{ task.name }}
            </q-item-label>
            <q-item-label caption>
            {{ task.description }}
            </q-item-label>
        </q-item-section>

        <q-item-section side>
            <div class="row">
                <q-btn 
                @click.stop="showEditTask = true"
                flat 
                round
                dense 
                color="primary-4" 
                icon="edit" 
            />   
            <q-btn 
                @click.stop="promptToDelete(id)"
                flat 
                round
                dense 
                color="red-4" 
                icon="delete" 
            />     
            </div>       
        </q-item-section>

        <q-dialog v-model="showEditTask">
            <edit-task 
            @close="showEditTask = false"
            :task="task"
            :id="id"
            />
        </q-dialog>
    </q-item>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                showEditTask: false
            }
        },
        props: ['task', 'id'],
        methods: {
            ...mapActions('tasks', ['updateTask', 'deleteTask']),
            updateTaskFunc(id, task) {
                this.updateTask({ id: id, updates: { completed: !task.completed } })
            },
            promptToDelete(id) {
                this.$q.dialog({
                title: 'Confirm',
                message: 'Are you sure you would like to delete?',
                cancel: true
                }).onOk(() => {
                    this.deleteTask(id)
                })
            }
        },
        components: {
            'edit-task': require('components/Tasks/Modals/EditTask.vue').default
        }
    }
</script>

<style>
    .q-checkbox__bg {
        border-radius: 100px;
    }
</style>