<!-- src/App.vue -->
<template>
    <v-app>
        <!-- Incluindo o componente Navbar -->
        <NavBar />

        <v-main>
            <!-- JobPanel agora recebe os dados como props -->
            <JobPanel :jobsData="jobs" :colsHorizontal="5" :rowsVertical="1" backgroundColor="#f5f5f5">
                <template v-slot:companyInfo>
                    <v-card class="mx-auto mt-5" max-width="500">
                        <v-card-title class="headline">Sobre a Empresa</v-card-title>
                        <v-card-text>
                            A empresa XYZ está oferecendo esses trabalhos para melhorar a experiência de busca de
                            empregos.
                        </v-card-text>
                    </v-card>
                </template>
            </JobPanel>
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
            jobs: [
                {
                    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
                    cargo: "Desenvolvedor Back-end",
                    cidade: "Rio de Janeiro",
                    estado: "RJ",
                    requisito: "Experiência com Java",
                    formacao: "Graduação em TI",
                    conhecimentos: "['Java', 'CSS', 'HTML']",
                    regime: "PJ",
                    jornada: "45 horas/semana",
                    remuneracao: 5000,
                },
                // Adicione mais dados aqui para testar
            ],
        };
    },
};
</script>

<style>
/* Estilos globais, se necessário */
</style>