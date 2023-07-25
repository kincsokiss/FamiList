<template>
  <CalendarItem/>
  <ToDoList/>
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
</template>

<script>
import ToDoList from './ToDoList.vue';
import CalendarItem from './Calendar.vue';
  
  export default({
    name: "MainPage",
    components: {
    ToDoList,
    CalendarItem
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