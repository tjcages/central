import Vue from 'vue'
import { uid } from 'quasar'

const state = {
    tasks: {
        'ID1': {
            name: 'Create initial layout for homepage',
            description: '',
            completed: true,
            dueDate: '2019/05/12',
            dueTime: '6:30pm'
        },
        'ID2': {
            name: 'Fixing icons with transparent background',
            completed: true,
            dueDate: '2019/05/13',
            dueTime: '2:45pm'
        },
        'ID3': {
            name: 'Discussions regarding workflow improvements',
            description: '',
            completed: false,
            dueDate: '2019/05/14',
            dueTime: '11:00am'
        },
        'ID4': {
            name: 'Create quotation app for redesign project',
            description: '',
            completed: false,
            dueDate: '2019/05/14',
            dueTime: '11:00am'
        }
    }
}

// Cannot be asyncronous
const mutations = {
    updateTask(state, payload) {
        Object.assign(state.tasks[payload.id], payload.updates)
    },
    deleteTask(state, id) {
        Vue.delete(state.tasks, id)
    },
    addTask(state, payload) {
        Vue.set(state.tasks, payload.id, payload.task)
    }
}

// Can be asyncronous
const actions = {
    updateTask({ commit }, payload) {
        commit('updateTask', payload)
    },
    deleteTask({ commit }, id) {
        commit('deleteTask', id)
    },
    addTask({ commit }, task) {
        let taskId = uid()
        let payload = {
            id: taskId,
            task: task
        }
        commit('addTask', payload)
    }
}

// Methods that get the data from a state – can also manipulate data
const getters = {
    tasksToday: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach(function(key) {
            let task = state.tasks[key]
            tasks[key] = task // ALL TASKS
            // if (!task.dueDate) {
            //     tasks[key] = task
            // }
        })
        return tasks
    },
    tasksUpcoming: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach(function(key) {
            let task = state.tasks[key] // NO TASKS
            // if (task.completed) {
            //     tasks[key] = task
            // }
        })
        return tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}