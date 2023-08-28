<template>
  <ion-app>
    <SideBar/>
    <!-- <ion-header><HeaderVue/></ion-header>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <router-view/>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    <ion-footer><FooterVue/></ion-footer> -->
    
    <ion-page id="main-content">
      <HeaderVue/>
        <router-view/>
      <!-- <FooterVue/> -->
    </ion-page>
  </ion-app>
</template>

<script>
import HeaderVue from './views/Header.vue';
// import FooterVue from './views/Footer.vue';
import SideBar from './views/SideBar.vue';
// import { IonContent } from '@ionic/vue';
// import MainPage from './views/MainPage.vue';

export default {
    name: 'App',
    components: {
      HeaderVue,
      // FooterVue,
      SideBar,
      // IonContent,
      // MainPage
  },
};
</script>

<style scoped>
  :root {
    --primary: #4ade80;
    --grey: #64748b;
    --dark: #1e293b;
    --dark-alt: #334155;
    --light: #f1f5f9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: var(--light);
    overflow: auto;
  }

  .content-fix {
    width: 100%;
  }

  button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background-color: none;
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

