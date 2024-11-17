<template>
    <v-app class="v-app">
        <NavBar
            @update-filter="updateFilter"
            @open-new-job-modal="toggleNewJobModal"
        />
        <v-main>
            <JobPanel   
                ref="jobPanel"
                :columns="3"
                :rowsPerPage="2"
                :filter="filter"
            />
        </v-main>
        <NewJobModal
            v-model="isNewJobModalOpen"
            @job-added="refreshJobs"
        />
    </v-app>
</template>

<script>
import NavBar from './components/Navbar.vue';
import JobPanel from './components/JobPanel.vue';
import NewJobModal from './components/NewJobModal.vue';

export default {
    name: 'App',
    components: {
        NavBar,
        JobPanel,
        NewJobModal,
    },
    data() {
        return {
            filter: '',
            isNewJobModalOpen: false,
        };
    },
    methods: {
        updateFilter(newFilter) {
            this.filter = newFilter;
        },
        toggleNewJobModal() {
            this.isNewJobModalOpen = !this.isNewJobModalOpen;
        },
        refreshJobs() {
            this.$refs.jobPanel.fetchJobs(this.filter);
        },
    },
};
</script>

<style>
</style>
