<template> 
    <main>
      <ion-grid>
        <ion-row>
          <ion-col>
            <SignInPage/>
          </ion-col>          
        </ion-row>
        <ion-row>
          <ion-col>
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

</style>