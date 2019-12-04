
  const state = {
      romanianSelected: true,
      menuIsOpen: false
  }

  const mutations = {
      selectRomanian(state) {
          state.romanianSelected = true
      },
      selectEnglish(state) {
          state.romanianSelected = false
      },
      openMenu(state) {
          state.menuIsOpen = true
      },
      closeMenu(state) {
          state.menuIsOpen = false
      },
  }

  const actions = {

  }

  const getters = {
      activeLanguage(state) {
          return state.romanianSelected
      },
      menuOpened(state) {
          return state.menuIsOpen
      }
  }

  export default {
      namespaced: true,
      state,
      mutations,
      actions,
      getters
  }
