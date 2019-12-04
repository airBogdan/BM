
    export const CalendarVue = resolve => {
        require.ensure(['calendar1/CalendarVue.vue'], () => {
            resolve(require('calendar1/CalendarVue.vue'))
        })
    }
    export const EventGrid = resolve => {
        require.ensure(['calendar2/eventGrid.vue'], () => {
            resolve(require('calendar2/eventGrid.vue'))
        })
    }
    export const ToDo = resolve => {
        require.ensure(['components/todo.vue'], () => {
            resolve(require('components/todo.vue'))
        })
    }
    export const Classes = resolve => {
        require.ensure(['dance/Classes.vue'], () => {
            resolve(require('dance/Classes.vue'))
        })
    }
    export const Edit = resolve => {
        require.ensure(['dance/Edit.vue'], () => {
            resolve(require('dance/Edit.vue'))
        })
    }
    export const Suggestions = resolve => {
        require.ensure(['homeComp/Suggestions.vue'], () => {
            resolve(require('homeComp/Suggestions.vue'))
        })
    }
    export const CRUD = resolve => {
        require.ensure(['auth/Dashboard.vue'], () => {
            resolve(require('auth/Dashboard.vue'))
        })
    }
    // export const Frisbo = resolve => {
    //     require.ensure(['frisbo/frisbo.vue'], () => {
    //         resolve(require('frisbo/frisbo.vue'))
    //     })
    // }
    export const SignUp = resolve => {
        require.ensure(['auth/SignUp.vue'], () => {
            resolve(require('auth/SignUp.vue'))
        })
    }
    export const SignIn = resolve => {
        require.ensure(['auth/SignIn.vue'], () => {
            resolve(require('auth/SignIn.vue'))
        })
    }
    export const NewPost = resolve => {
        require.ensure(['auth/subcomponents/NewPost.vue'], () => {
            resolve(require('auth/subcomponents/NewPost.vue'))
        })
    }
    export const ViewPost = resolve => {
        require.ensure(['auth/ViewPost.vue'], () => {
            resolve(require('auth/ViewPost.vue'))
        })
    }
