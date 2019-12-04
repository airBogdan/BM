import firebase from 'firebase/app'
import 'firebase/storage'

const state = {
    user: null,
    loading: false,
    error: null,
    postList: [],
    viewPost: {},
    loading: ''
}

const mutations = {
    setUser(state, payload) {
      // console.log('payload:', payload)
        state.user = payload
    },
    setLoading(state, payload) {
        state.loading = payload
    },
    setError(state, payload) {
        state.error = payload
    },
    clearError(state) {
        state.error = null
    },
    addPost(state, payload) {
        state.postList.push(payload)
    },
    loadPosts(state, payload) {
        state.postList.push(payload)
    },
    loadPostView(state, payload) {
        state.viewPost = payload
    },
    startLoading(state) {
        state.loading = true
    },
    stopLoading(state) {
        state.loading = false
    }
}

const actions = {
    signUp(context, payload) {
        context.commit('setLoading', true)
        context.commit('clearError')
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(user => {
                context.commit('setLoading', false)
                context.commit('setUser', {uid: user.user.uid, email: user.user.email, emailVerified: user.user.emailVerified})
            })
            .then(() => {
                var actionCodeSettings = {
                    url: 'http://localhost:8080/authentication'
                }
                firebase.auth().currentUser.sendEmailVerification(actionCodeSettings)
            })
            // .then(mail => console.log(mail))
            .catch(e => {
                context.commit('setLoading', false)
                context.commit('setError', e.message)
                console.log(e)
            })
    },
    signIn(context, payload) {
        context.commit('setLoading', true)
        context.commit('clearError')
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(user => {
                context.commit('setLoading', false)
                context.commit('setUser', {uid: user.user.uid, email: user.user.email})
            })
            .catch(e => {
                context.commit('setLoading', false)
                context.commit('setError', e.message)
            })
    },
    autoSignin({commit}, payload) {
        commit('setUser', {uid: payload.uid, email: payload.email, emailVerified: payload.emailVerified})
    },
    clearError({commit}) {
        commit('clearError')
    },
    logout({commit}) {
        commit('setUser', null)
        return firebase.auth().signOut()
    },
    firebaseUpload({commit}, payload) {
        let imageUrl
        const filename = payload.name
        const ext = filename.slice(filename.lastIndexOf('.'))
        const id = this.state.user.uid
        firebase.storage().ref('imag').child('mata').put(payload)
            .then()
            // console.log(firebase.storage().ref('imag'))
            .catch(e => console.log(e))
    },
    addPost(context, payload) {
        context.commit('startLoading')
        return firebase.database().ref('blog-posts/'+ context.state.user.uid).push(payload)
            .then(res => {
                context.commit('stopLoading')
                context.commit('addPost', {...payload, createdBy: this.state.user.uid, id: res.key})
            })
            .catch(e=> {
                context.commit('stopLoading')
                console.log(e)
            })

    },
    loadPosts({commit}) {
        return firebase.database().ref('blog-posts').once('value')
        .then(data => {
            commit('stopLoading')
            let obj = data.val()
            // console.log(obj);
            for (let uid in obj) {
                for (let key in obj[uid]) {
                    commit('loadPosts', {...obj[uid][key], id: key, createdBy: uid})
                }
            }
        })
        .catch(e=> {
            commit('stopLoading')
            console.log(e)
        })
    },
    loadPostView({commit}, payload) {
        var ref= 'blog-posts/' + state.user.uid + '/' + payload
        // console.log(state.user.);
        return firebase.database().ref(ref).once('value')
            .then(data => {
                // return data
                commit('loadPostView', data.val())
            })
    },
    startLoading({commit}) {
        commit('startLoading')
    },
    stopLoading({commit}) {
        commit('stopLoading')
    }
}

const getters = {
    user(state) {
        return state.user
    },
    loading(state) {
        return state.loading
    },
    error(state) {
        return state.error
    },
    postList(state) {
        return state.postList
    },
    viewPost(state) {
        return state.viewPost
    },
    loading(state) {
        return state.loading
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
