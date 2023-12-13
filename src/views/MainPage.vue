<template>
  <body class="main">
    <ion-content>
      <ion-refresher slot="fixed" :pull-factor="0.5" :pull-min="100" :pull-max="200" @ionRefresh="handleRefresh($event)">
          <ion-refresher-content
            :pulling-icon="chevronDownCircleOutline"
            refreshing-spinner="circles"
            refreshing-text="Refreshing..."
          >
          </ion-refresher-content>
      </ion-refresher>
      <div>
        <ion-grid >
          <ion-row>
            <ion-col>
              <CalendarItem/>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ToDoList :isRefreshing="isRefreshing" @updateRefreshingState="updateRefreshingState"/>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
        
    </ion-content>
  </body>
    
</template>

<script setup>
import ToDoList from './ToDoList.vue';
import CalendarItem from './CalendarItem.vue';
import { IonGrid, IonRow, IonCol, IonContent, IonRefresher, IonRefresherContent } from '@ionic/vue';
import { chevronDownCircleOutline } from 'ionicons/icons';
import { ref } from 'vue';

const isRefreshing = ref(false);
const handleRefresh = async (event) => {
  event.detail.complete();
  isRefreshing.value = true;
}

function updateRefreshingState(state){
  isRefreshing.value = state;
}
</script>

<style lang="scss" scoped>
  ion-toolbar {
    --opacity: 0.5;
  }

  .main {
    max-height: 100%;
    // background-color: #f7d6c5;
  }

  ion-refresher {
    margin-top: 2.5rem;
  }
</style>
