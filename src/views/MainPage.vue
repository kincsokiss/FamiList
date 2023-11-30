<template>
  <body class="main">
    <ion-content>
      <ion-grid >
      <ion-row>
        <ion-col>
          <CalendarItem/>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ToDoList/>
        </ion-col>
      </ion-row>
    </ion-grid>
    </ion-content>
    
  </body>
    
</template>

<script setup>
import ToDoList from './ToDoList.vue';
import CalendarItem from './CalendarItem.vue';
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/vue';
</script>

<style lang="scss" scoped>
  ion-toolbar {
    --opacity: 0.5;
  }

  .main {
    max-height: 100%;
    // background-color: #f7d6c5;
  }
</style>
