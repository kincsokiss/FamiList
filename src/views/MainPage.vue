<template>
  <HeaderVue/>
  <MenuItem/>
  <ion-content class="ion-padding">
    <h1>Calendar</h1>
    <Calendar/>
    
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

    <h1>To-Do List</h1>
    <ToDoList/>
  </ion-content>
  <FooterVue/>
</template>

<script>
  import ToDoList from './ToDoList.vue';
  import MenuItem from "./Menu.vue";
  import Calendar from './Calendar.vue';
  import HeaderVue from './Header.vue';
  import FooterVue from './Footer.vue';
  
  export default({
    name: "MainPage",
    components: { 
      ToDoList,
      Calendar,
      MenuItem,
      HeaderVue,
      FooterVue,
      },
  });

</script>

<style scoped>
  ion-toolbar {
    --opacity: 0.5;
  }

  .link_color {
    color: white;
  }

</style>