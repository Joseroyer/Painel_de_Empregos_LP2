<template>
    <v-app class="v-app">
        <NavBar/>
        <v-main >
            <JobPanel :columns="3" :rowsPerPage="2" />
        </v-main>
    </v-app>
</template>

<script>
import NavBar from './components/Navbar.vue';
import JobPanel from './components/JobPanel.vue'
export default {
    name: 'App',
    components: {
        NavBar,
        JobPanel,
    },
    data() {
        return {
            
        };
    },
};
</script>

<style>
    
</style>