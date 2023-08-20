<template> 
    <main class="dimensions">
      <SignInPage/>
      <NewHere/>
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
    .dimensions {
      padding: 2rem;
      display: flex; 
      height: fit-content;
      width: 1375px;
      margin: 0;

      @media (max-width: 768px) {
        padding-left: 6rem;
      }
    }
</style>