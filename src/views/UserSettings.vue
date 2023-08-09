<template> 
    <main class="dimensions">  
      <h1>User Settings</h1>
      <nav>
        <div id="nav">
          <router-link to="/RegisterPage" class="link_color"> Register Page</router-link>
        </div>
      </nav>

      <nav>
        <div id="nav">
          <router-link to="/SignInPage" class="link_color"> Sign In Page</router-link>
        </div>
      </nav>

      <router-view/>
    </main> 
</template>

<script>

    export default ({
        name: 'UserSettings',
    })
</script>

<style>
    .link_color {
        color: white;
    }

    .dimensions {
    width: 1404px;
    height: 9999px;
    flex: 1, 1 0;
    padding: 2rem;

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
</style>