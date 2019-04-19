import Vue from 'vue'
import Router from 'vue-router'
import Manager from '@/components/Manager'
import TaskState from '@/components/TaskState'
import DataHome from '@/components/DataHome'
import UerMessage from '@/components/UerMessage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Manager',
      component: Manager,
      children:[
        { path: '/data_home', component: DataHome, name: 'DataHome' },
        { path: '/task', component: TaskState, name: 'TaskState' },
        { path: '/user', component: UerMessage, name: 'UerMessage' },
      ]
    },

  ]
})
