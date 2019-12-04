import firebase from 'firebase/app'

const state = {
    lastEntry: {}
}
const mutations = {
    addLastEntry(state, payload) {
        state.lastEntry = payload
    }
}
const actions = {
    addTodo({commit}, payload) {
        return firebase.database().ref(payload.major ? 'majore' : 'minore').push({todo: payload.todo})
            .then(data => commit('addLastEntry', {"todo": payload.todo, "key": data.key})
                // console.log("store")
            )
            .catch(e => console.log(e))
    },
    deleteTodo({commit}, payload) {
        // console.log(payload);
        firebase.database().ref(payload.major=="major" ? 'majore' : 'minore').child(payload.key).remove()
    },
    loadTodos({commit}, payload) {
        
    }
}
const getters = {
    lastEntry(state) {
        return state.lastEntry
    }
}



export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
