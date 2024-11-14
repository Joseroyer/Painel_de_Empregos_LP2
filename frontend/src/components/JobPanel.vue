<!-- src/components/JobPanel.vue -->
<template>
    <v-container :style="{ backgroundColor: backgroundColor }">
        <!-- Filtro de pesquisa -->
        <v-text-field v-model="searchTerm" label="Pesquisar Cargo" class="mb-4" clearable dense />

        <v-row>
            <!-- Exibindo os JobCards filtrados -->
            <v-col v-for="(job, index) in filteredJobs" :key="index" :cols="12" :md="12 / colsHorizontal">
                <JobCard :job="job" />
            </v-col>
        </v-row>

        <!-- Navegação -->
        <v-row class="mt-4" v-if="showPagination">
            <v-btn @click="prevPage" :disabled="currentPage <= 1" icon>
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn @click="nextPage" :disabled="currentPage * rowsPerPage >= filteredJobs.length" icon>
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </v-row>

        <!-- Informações sobre a empresa -->
        <slot name="companyInfo" />
    </v-container>
</template>

<script>
import JobCard from './JobCard.vue';

export default {
    name: 'JobPanel',
    components: {
        JobCard,
    },
    props: {
        colsHorizontal: {
            type: Number,
            default: 5,
        },
        rowsVertical: {
            type: Number,
            default: 1,
        },
        backgroundColor: {
            type: String,
            default: '#fff',
        },
        jobsData: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            searchTerm: '',
            currentPage: 1,
            rowsPerPage: this.colsHorizontal * this.rowsVertical,
        };
    },
    computed: {
        filteredJobs() {
            return this.jobsData.filter((job) =>
                job.cargo.toLowerCase().includes(this.searchTerm.toLowerCase())
            );
        },
        showPagination() {
            return this.filteredJobs.length > this.rowsPerPage;
        },
    },
    methods: {
        nextPage() {
            if (this.currentPage * this.rowsPerPage < this.filteredJobs.length) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
    },
};
</script>

<style scoped>
.v-btn {
    margin: 0 5px;
}
</style>