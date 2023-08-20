<template>
  <ion-app>
    <HeaderVue/>
    <div class="app">
      <SideBar/>
      <router-view/>
    </div>
    <FooterVue/>
  </ion-app>
</template>

<script>

import { ref } from 'vue';
import {
  archiveOutline,
  archiveSharp,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
} from 'ionicons/icons';

import HeaderVue from './views/Header.vue';
import FooterVue from './views/Footer.vue';
import SideBar from './views/SideBar.vue';

export default {
  name: 'App',
  components: {
    HeaderVue,
    FooterVue,
    SideBar
},
};

const selectedIndex = ref(0);
const appPages = [
  {
    title: 'Inbox',
    url: '/folder/Inbox',
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
  {
    title: 'Outbox',
    url: '/folder/Outbox',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
  },
  {
    title: 'Favorites',
    url: '/folder/Favorites',
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: 'Archived',
    url: '/folder/Archived',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp,
  },
  {
    title: 'Trash',
    url: '/folder/Trash',
    iosIcon: trashOutline,
    mdIcon: trashSharp,
  },
  {
    title: 'Spam',
    url: '/folder/Spam',
    iosIcon: warningOutline,
    mdIcon: warningSharp,
  },
];
//const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const path = window.location.pathname.split('folder/')[1];
if (path !== undefined) {
  selectedIndex.value = appPages.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
}
</script>

<style scoped>
  :root {
    --primary: #4ade80;
    --grey: #64748b;
    --dark: #1e293b;
    --dark-alt: #334155;
    --light: #f1f5f9;
    --sidebar-width: 300px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: var(--light);
  }

  button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background-color: none;
  }

  .app {
    display: flex; 
    background-color: rgb(72, 72, 72);
  }

  ion-note {
    display: inline-block;
    font-size: 16px;

    color: var(--ion-color-medium-shade);
  }

  ion-item.selected {
    --color: var(--ion-color-primary);
  }
</style>

