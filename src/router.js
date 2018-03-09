import Vue from 'vue'
import Router from 'vue-router'
import one from './views/one.vue'
import two from './views/two.vue'

Vue.use(Router)

export default new Router({

  // linkActiveClass: 'active',
//  路由配置
  routes: [
    {
      path: '/one',
      component: one
    },
    {
      path: '/two',
      component: two
    }
  ]
})
