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

<script>
    import SignInPage from './SignIn.vue';
    import NewHere from './NewHere.vue';

    export default ({
        name: 'UserSettings',

        components: {
          SignInPage,
          NewHere
        }
    })
</script>

<style scoped> 


  ion-col {
    background-color: #f7d6c5;
  }
</style>