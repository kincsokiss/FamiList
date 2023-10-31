<template>
    <main>
        <h2>New Here?</h2>
        <h5>Sign Up and discover the coolest To-Do List for families</h5>
        <router-link to="/register-page" class="ion-button">Sign Up</router-link>
    </main>
</template>

<script setup>
    
</script>

<style scoped>

    main {
        text-align: center;
        background-color:#f7d6c5;
        font-weight: bold;
        color: black;
        font-family: 'Poppins', sans-serif;
    }
    
    .ion-button {
        color: #f7d6c5;
        text-decoration: none;
        background-color: #312b27;
        padding: 3%;
        border-radius: 10px;
        font-family: 'Poppins', sans-serif;
        &:hover {
            background-color: #191514;
        }
    }


    h2,h5{
        color: #191514;
        font-family: 'Poppins', sans-serif;
        
    }

</style>