import { createApp } from 'vue';
import { createRouter, createWebHistory } from '@ionic/vue-router';  
import UserSettings from '@/views/UserSettings.vue';
import MainPage from '@/views/MainPage.vue';
import Calendar from '@/views/Calendar.vue';
import ToDoList from '@/views/ToDoList.vue';
import CreateTask from '@/views/CreateTask.vue';

import RegisterPage from '@/views/Register.vue';
import SignInPage from '@/views/SignIn.vue';
import TaskDetailPage from '@/views/TaskDetailPage.vue';
import UserDetailPage from '@/views/UserDetailPage.vue';
  
  const routes = [
    { path: '/main-page', name: 'mainpage', component: MainPage },
    { path: '/', component: UserSettings },
    { path: '/calendar', component: Calendar },
    { path: '/to-do-list', component: ToDoList },
    { path: '/register-page', name: 'registerpage', component: RegisterPage },
    { path: '/sign-in-page', name: 'signinpage', component: SignInPage },
    { path: '/create-task', name: 'createtask', component: CreateTask },
    { path: '/tasks/:taskid', component: TaskDetailPage },
    { path: '/user-detail-page', component: UserDetailPage }
    
  ];
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })


const app = createApp({});

app.use(router)

app.mount('#app')

export default router
