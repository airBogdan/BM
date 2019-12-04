import Home from 'components/Home.vue';
// import CalendarVue from 'calendar1/CalendarVue.vue'
// import EventGrid from 'calendar2/eventGrid.vue'
// import ToDo from 'components/todo.vue'
// import Classes from 'dance/Classes.vue'
// import Edit from 'dance/Edit.vue'
// import Suggestions from 'homeComp/Suggestions.vue'
// import Authentication from 'auth/Dashboard.vue'
// import SignUp from 'auth/SignUp.vue'
// import SignIn from 'auth/SignIn.vue'
// import NewPost from 'auth/subcomponents/NewPost.vue'
// import ViewPost from 'auth/ViewPost.vue'
// import('calendar1/CalendarVue.vue')
// const CalendarVue = () => import('calendar1/CalendarVue.vue')
// const EventGrid = () => import('calendar2/eventGrid.vue')
// const ToDo = () => import('components/todo.vue')
// const Classes = () => import('dance/Classes.vue')
// const Edit = () => import('dance/Edit.vue')
// const Suggestions = () => import('homeComp/Suggestions.vue')
// const CRUD = () => import('auth/Dashboard.vue')
// const SignUp = () => import('auth/SignUp.vue')
// const SignIn = () => import('auth/SignIn.vue')
// const NewPost = () => import('auth/subcomponents/NewPost.vue')
// const ViewPost = () => import('auth/ViewPost.vue')
import {
    CalendarVue,
    EventGrid,
    ToDo,
    Classes,
    Edit,
    Suggestions,
    CRUD,
    SignUp,
    SignIn,
    NewPost,
    ViewPost,
    // Frisbo
} from './LazyLoading'

import Frisbo from './frisbo'


import {store} from './../store/store'
import SignInAuthguard from './SignInAuthguard'
import TodoAuth from './TodoAuth'

const baseRoutes = [
    {path:'', name: 'Home', component: Home},
    {path: '/EventCalendar1', component: CalendarVue},
    {path: '/EventCalendar2', component: EventGrid},
    {
        path: '/todo',
        component: ToDo
        // ,beforeEnter: TodoAuth
    },
    {path: '/classes', component: Classes},
    {path: '/edit-classes', component: Edit},
    {path: '/suggestions', component: Suggestions},
    {path: '/CRUD', name: 'CRUD', component: CRUD},
    {path: '/CRUD/sign-up', name: "SignUp", component: SignUp},
    {path: '/CRUD/sign-in', name: "SignIn", component: SignIn},
    {
        path: '/CRUD/new-post',
        name: "NewPost",
        component: NewPost,
        beforeEnter: SignInAuthguard
    },
    {
        path: '/CRUD/post/:id',
        name: 'ViewPost',
        component: ViewPost,
        props: true
    },
    {path: '/redirect-me', redirect: {name: 'Home', props: true}},
    {path: '*', redirect: '/'}
]

export const routes = baseRoutes.concat(Frisbo)
