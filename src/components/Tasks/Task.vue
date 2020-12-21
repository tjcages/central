<template>
    <q-item 
        @click="updateTaskFunc(id, task)"
        clickable
        :class="!task.completed ? 'white' : 'bg-blue-1'"
        padding>
        <q-item-section side top>
            <q-checkbox v-model="task.completed" color="primary" />
        </q-item-section>

        <q-item-section>
            <q-item-label>
            {{ task.name }}
            </q-item-label>
            <q-item-label caption>
            {{ task.description }}
            </q-item-label>
        </q-item-section>

        <q-item-section 
            v-if="task.dueDate"
            side>
            <div class="row">
            <div class="column">
                <q-item-label 
                caption
                class="row justify-end"
                >{{ task.dueDate }}</q-item-label>
                <q-item-label 
                caption
                class="row justify-end"
                >
                <small>{{ task.dueTime }}</small>
                </q-item-label>
            </div>
            <div class="column justify-center">
                <q-icon 
                name="event" 
                size="18px"
                class="q-ml-sm"
                />
            </div>
            </div>
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

</style>