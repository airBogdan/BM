import Vue from 'vue';
import Vuex from 'vuex';
import Content from '../Content.json'
import axios from 'axios'

import modul from './modules/modul.js'
import authenticate from './modules/crud.js'
import todoDB from './modules/todoDB'
import frisbo from './modules/frisbo'



Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        suggestions: [],
        user: 5,
        cal2AddedDays: [],
        cal2AddedTod: [],
        cal2AddedOrganizer: [],
        cal2AddedLocation: [],
        cal2AddedEventType: [],
        cal2Content: Content,
        cal2Blur: false,
        cal2Modal: {}
    },
    mutations: {
        firebaseToStore(state, message) {
            this.state.suggestions = []
            var id=0
            for (let keys in message) {
                this.state.suggestions.push({...message[keys], id: id})
                id+=1
            }
        },
        removeDay(state, payload) {
            state.cal2AddedDays.splice(payload, 1)
        },
        addDay(state, payload){
            state.cal2AddedDays.push(payload)
        },
        removeTod(state, payload){
            state.cal2AddedTod.splice(state.cal2AddedTod.indexOf(payload), 1)
        },
        addTod(state, payload) {
            state.cal2AddedTod.push(payload)
        },
        removeOrganizer(state, payload) {

            state.cal2AddedOrganizer.splice(state.cal2AddedOrganizer.indexOf(payload), 1)
        },
        addOrganizer(state, payload) {
            state.cal2AddedOrganizer.push(payload)
        },
        removeLocation(state, payload) {
            state.cal2AddedLocation.splice(state.cal2AddedLocation.indexOf(payload), 1)
        },
        addLocation(state, payload) {
            state.cal2AddedLocation.push(payload)
        },
        removeEventType(state, payload) {
            state.cal2AddedEventType.splice(state.cal2AddedEventType.indexOf(payload),1)
        },
        addEventType(state, payload) {
            state.cal2AddedEventType.push(payload)
        },
        blurTrue(state) {
            state.cal2Blur = true
        },
        blurFalse(state) {
            state.cal2Blur = false
        },
        modal(state, payload) {
            state.cal2Modal = payload
        }
    },
    actions: {
        postSuggestion(context, message) {
             axios.post('https://vue-auth-240f1.firebaseio.com/sugestii.json', message)
            .then(res => {
                context.dispatch('getSuggestions')
            })
        },
        getSuggestions(context) {
            axios.get('https://vue-auth-240f1.firebaseio.com/sugestii.json')
                .then(res => {
                    context.commit('firebaseToStore', res.data)
                })
                .catch(e => console.log(e))
        }
    },
    getters: {
        suggestionsGetter(state) {
            return state.suggestions
        },
        // testGetter: state => {
        //     return state.test
        // }
    },
    modules: {
        modul,
        authenticate,
        todoDB, 
        frisbo
    }
});
