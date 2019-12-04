import Vue from 'vue'
import Router from 'vue-router'
// Vue.use(Router)

const Frisbo = resolve => {
    require.ensure(['frisbo/frisbo.vue'], () => {
        resolve(require('frisbo/frisbo.vue'))
    })
}

const HowDoesItWork = resolve => {
    require.ensure(['frisbo/routes/1HowDoesItWork.vue'], () => {
        resolve(require('frisbo/routes/1HowDoesItWork.vue'))
    })
}

const Prices = resolve => {
    require.ensure(['frisbo/routes/2Prices.vue'], () => {
        resolve(require('frisbo/routes/2Prices.vue'))
    })
}

const Benefits = resolve => {
    require.ensure(['frisbo/routes/3Benefits.vue'], () => {
        resolve(require('frisbo/routes/3Benefits.vue'))
    })
}

const BecomeAFulfiller = resolve => {
    require.ensure(['frisbo/routes/4BecomeAFulfiller.vue'], () => {
        resolve(require('frisbo/routes/4BecomeAFulfiller.vue'))
    })
}

const Contact = resolve => {
    require.ensure(['frisbo/routes/5Contact.vue'], () => {
        resolve(require('frisbo/routes/5Contact.vue'))
    })
}

const Navigation = resolve => {
    require.ensure(['frisbo/comp/Navigation.vue'], () => {
        resolve(require('frisbo/comp/Navigation.vue'))
    })
}




export default [
    {path: '/frisbo', name: 'FrisboHome', components:  {
        'navigation': Navigation,
        default: Frisbo
    }   },
    {path: '/frisbo/Cum-funcționează', name: 'FrisboHowDoesItWork', components:  {
        'navigation': Navigation,
        default: HowDoesItWork
    }   },
    {path: '/frisbo/Prețuri', name: 'FrisboPrices', components:  {
        'navigation': Navigation,
        default: Prices
    }   },
    {path: '/frisbo/Beneficii', name: 'FrisboBenefits', components:  {
        'navigation': Navigation,
        default: Benefits
    }   },
    {path: '/frisbo/Devino-fulfiller', name: 'FrisboBecomeAFulfiller', components:  {
        'navigation': Navigation,
        default: BecomeAFulfiller
    }   },
    {path: '/frisbo/Contact', name: 'FrisboContact', components:  {
        'navigation': Navigation,
        default: Contact
    }   },

]
