<template> 
    <main>
      <ion-grid>
        <ion-row>
          <ion-col size="12" size-sm="6">
            <SignInPage/>
          </ion-col>
          <ion-col size="12" size-sm="6">
            <NewHere/>
          </ion-col>          
        </ion-row>
      </ion-grid>
    </main> 
</template>

<script setup>
    import SignInPage from './SignIn.vue';
    import NewHere from './NewHere.vue';
    import { IonGrid, IonRow, IonCol } from '@ionic/vue';
    
</script>

<style scoped> 
  ion-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>