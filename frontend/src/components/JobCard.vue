<!-- src/components/JobCard.vue -->
<template>
    <v-card class="mx-auto" max-width="300" @click="flipCard" v-bind:class="{ flip: flipped }">
        <v-card-title v-if="!flipped" class="headline">
            <v-img :src="job.logo" class="mx-auto" max-width="100" max-height="100"></v-img>
        </v-card-title>
        <v-card-subtitle v-if="!flipped">
            {{ job.cargo }} - {{ job.regime }}<br />
            {{ job.cidade }}, {{ job.estado }}
        </v-card-subtitle>

        <v-card-text v-if="flipped">
            <div><strong>Requisitos:</strong> {{ job.requisito }}</div>
            <div><strong>Formação:</strong> {{ job.formacao }}</div>
            <div><strong>Conhecimentos:</strong> {{ job.conhecimentos }}</div>
            <div><strong>Jornada:</strong> {{ job.jornada }}</div>
            <div><strong>Remuneração:</strong> R$ {{ job.remuneracao }}</div>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'JobCard',
    props: {
        job: Object,
    },
    data() {
        return {
            flipped: false,
        };
    },
    methods: {
        flipCard() {
            this.flipped = !this.flipped;
        },
    },
};
</script>

<style scoped>
.v-card.flip {
    transform: rotateY(180deg);
    transition: transform 0.5s;
}

.v-card-title,
.v-card-subtitle {
    text-align: center;
}
</style>