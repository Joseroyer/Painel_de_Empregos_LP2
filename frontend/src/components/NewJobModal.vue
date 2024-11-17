<template>
    <v-dialog v-model="dialog" max-width="600">
        <v-card>
            <v-card-title>Adicionar Novo Card</v-card-title>
            <v-card-text>
                <v-form ref="form" v-model="isValid">
                    <v-text-field v-model="job.logo" label="Logo" required></v-text-field>
                    <v-text-field v-model="job.cargo" label="Cargo" required></v-text-field>
                    <v-text-field v-model="job.cidade" label="Cidade" required></v-text-field>
                    <v-text-field v-model="job.estado" label="Estado" required></v-text-field>
                    <v-text-field v-model="job.requisito" label="Requisito" required></v-text-field>
                    <v-text-field v-model="job.formacao" label="Formação" required></v-text-field>
                    <v-text-field
                        v-model="job.conhecimentos"
                        label="Conhecimentos (lista, separada por vírgulas)"
                        required
                    ></v-text-field>
                    <v-text-field v-model="job.regime" label="Regime" required></v-text-field>
                    <v-text-field v-model="job.jornada" label="Jornada" required></v-text-field>
                    <v-text-field
                        v-model="job.remuneracao"
                        label="Remuneração"
                        type="number"
                        required
                    ></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" @click="submitForm">Salvar</v-btn>
                <v-btn text @click="closeModal">Cancelar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios';

export default {
    name: 'NewJobModal',
    props: {
        modelValue: {
            type: Boolean,
            required: true,
        },
    },
    emits: ['update:modelValue', 'job-added'],
    data() {
        return {
            dialog: this.modelValue,
            job: {
                logo: '',
                cargo: '',
                cidade: '',
                estado: '',
                requisito: '',
                formacao: '',
                conhecimentos: '',
                regime: '',
                jornada: '',
                remuneracao: '',
            },
            isValid: false,
        };
    },
    watch: {
        modelValue(newVal) {
            this.dialog = newVal;
        },
        dialog(newVal) {
            this.$emit('update:modelValue', newVal);
        },
    },
    methods: {
        closeModal() {
            this.dialog = false;
        },
        async submitForm() {
            if (!this.isValid) return;

            const jobData = {
                ...this.job,
                conhecimentos: this.job.conhecimentos
                    .split(',')
                    .map(item => item.trim()),
            };

            try {
                await axios.post('http://localhost:8082/cards/cadastrarCards', jobData);

                this.$emit('job-added');
                
                this.closeModal();
            } catch (error) {
                console.error('Erro ao adicionar o card:', error);
            }
        },
    },
};
</script>

<style>
</style>
