import Vue from 'vue'
import { uid } from 'quasar'

const state = {
    tasks: {
        'ID1': {
            name: 'Go to store',
            description: 'Notify me about updates to apps or games',
            completed: false,
            dueDate: '2019/05/12',
            dueTime: '6:30pm'
        },
        'ID2': {
            name: 'Get cherries',
            completed: false,
            dueDate: '2019/05/13',
            dueTime: '2:45pm'
        },
        'ID3': {
            name: 'Get apples',
            description: 'Notify me about updates to apps or games',
            completed: false,
            dueDate: '2019/05/14',
            dueTime: '11:00am'
        },
        'ID4': {
            name: 'Trip a kid',
            description: 'Not my fault',
            completed: true,
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
    tasksTodo: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach(function(key) {
            let task = state.tasks[key]
            if (!task.completed) {
                tasks[key] = task
            }
        })
        return tasks
    },
    tasksCompleted: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach(function(key) {
            let task = state.tasks[key]
            if (task.completed) {
                tasks[key] = task
            }
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