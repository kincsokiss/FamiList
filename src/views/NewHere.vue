<template>
    <main class="back_color dimension centered">
        <h2>New Here?</h2>
        <h5>Sign Up and discover the coolest To-Do List for families</h5>
        <router-link to="/register-page" class="link_color">Sign Up</router-link>
    </main>
</template>

<script>
    export default ({
        name: 'NewHere',
    })
</script>

<style scoped>
    .link_color {
        color: white;
        text-decoration: none;
        background-color: rgb(64, 130, 161);
        padding: 8px;
        border-radius: 10px;

        &:hover {
            background-color: rgb(97, 141, 161);
        }
    }

    .back_color {
        background-color: #16373d;
    }

    .dimension {
        height: 100%;
        width: 100%;
    }

    .centered {
        text-align: center;
        position: relative;
    }
</style>