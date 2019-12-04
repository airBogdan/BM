import {store} from './../store/store'

export default (to, from, next) => {
  if (store.getters['authenticate/user']) {
      next()
  }
  else {
      // alert('You need to sign up or be signed in in order to access the dashboard.')
      next('/authentication/sign-up')
  }
}
