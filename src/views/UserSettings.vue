<template>

<div class="userSettings">
    
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

    <router-view></router-view>    

</div>
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
</style>