const state = {
    user: 'ion'
}
const mutations = {
    testExamp(state) {
        console.log('mergee!');
    }
}
const actions = {
    test2(context) {
        console.log("merge si asta!!");
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
