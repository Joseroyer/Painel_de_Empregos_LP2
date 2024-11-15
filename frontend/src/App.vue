<template>
    <v-app class="v-app">
        <NavBar @update-filter="updateFilter" />
        <v-main>
            <JobPanel :columns="3" :rowsPerPage="2" :filter="filter" />
        </v-main>
    </v-app>
</template>

<script>
import NavBar from './components/Navbar.vue';
import JobPanel from './components/JobPanel.vue';

export default {
    name: 'App',
    components: {
        NavBar,
        JobPanel,
    },
    data() {
        return {
            filter: '', // Armazena o texto de filtro
        };
    },
    methods: {
        updateFilter(newFilter) {
            this.filter = newFilter; // Atualiza o filtro com o texto do usuário
        },
    },
};
</script>

<style>
</style>
