<template>
    <v-container class="fill-height d-flex flex-column justify-center align-center" style="padding: 40px;">
        <v-row>
            <v-col
                v-for="(item, index) in displayedItems"
                :key="index"
                :cols=" 12 / columns"
            >
                <JobCard
                    :job="{
                        logo: item.logo,
                        cargo: item.cargo,
                        cidade: item.cidade,
                        estado: item.estado,
                        requisito: item.requisito,
                        formacao: item.formacao,
                        conhecimentos: item.conhecimentos,
                        regime: item.regime,
                        jornada: item.jornada,
                        remuneracao: item.remuneracao,
                    }"
                />
            </v-col>
        </v-row>

        <v-pagination
            v-model="currentPage"
            :length="totalPages"
            :total-visible="5"
            class="mt-4"
        ></v-pagination>
    </v-container>
</template>

<script>
import JobCard from './JobCard.vue';
import axios from 'axios';

export default {
    name: 'JobPanel',
    components: {
        JobCard,
    },
    props: {
        columns: {
            type: Number,
            default: 3,
        },
        rowsPerPage: {
            type: Number,
            default: 2,
        },
        filter: {
            type: String,
            default: '', 
        },
    },
    data() {
        return {
            jobs: [],
            currentPage: 1,
        };
    },
    watch: {
        filter: {
            immediate: true,
            handler(newFilter) {
                this.fetchJobs(newFilter);
            },
        },
    },
    computed: {
        itemsPerPage() {
            return this.columns * this.rowsPerPage;
        },
        totalPages() {
            return Math.ceil(this.jobs.length / this.itemsPerPage);
        },
        displayedItems() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            return this.jobs.slice(start, start + this.itemsPerPage);
        },
    },
    methods: {
        async fetchJobs(filter) {
            try {
                const response = await axios.get(`http://localhost:8082/cards/buscar?filter=${filter}`);
                this.jobs = response.data;
            } catch (error) {
                console.error('Erro ao buscar os jobs:', error);
            }
        },
    },
};
</script>
