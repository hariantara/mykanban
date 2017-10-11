import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MainContent from '@/components/MainContent'
import ModalAddKanban from '@/components/ModalAddKanban'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainContent',
      component: MainContent,
      children: [
        {
          path: '/addkanban',
          name: 'ModalAddKanban',
          components: ModalAddKanban
        }
      ]
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
