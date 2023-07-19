<template>

<div class="userSettings">
    
    <h1>User Settings</h1>
    <h3>Create User</h3>
    <UserItem/>
</div>
</template>

<script>
 import UserItem from './User.vue';

    export default ({
        name: 'UserSettings',
        components: {UserItem}
    })
</script>