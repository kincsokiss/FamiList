<template> 
    <main>
      <ion-grid>
        <ion-row>
          <ion-col>
            <SignInPage/>
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