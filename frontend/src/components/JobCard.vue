<template>
    <v-card class="job-card" :class="{ flipped: isFlipped }" @click="flipCard">

        <div class="job-card-face job-card-front">
            <v-card-subtitle class="job-card-subtitle">
                <strong>{{ job.cargo }}</strong> - {{ job.regime }}
            </v-card-subtitle>
            <v-card-text class="job-card-location">
                {{ job.cidade }}, {{ job.estado }}
            </v-card-text>
            <v-card-title class="job-card-title">
                <v-img :src="job.logo" class="job-logo"></v-img>
            </v-card-title>
        </div>

        <div class="job-card-face job-card-back">
            <v-card-text class="job-card-details">
                <div><strong>Requisitos:</strong> {{ job.requisito }}</div>
                <div><strong>Formação:</strong> {{ job.formacao }}</div>
                <div><strong>Conhecimentos:</strong> {{ job.conhecimentos.join(', ') }}</div>
                <div><strong>Jornada:</strong> {{ job.jornada }}</div>
                <div><strong>Remuneração:</strong> R$ {{ job.remuneracao }}</div>
            </v-card-text>
        </div>
        
    </v-card>
</template>

<script>
export default {
    name: 'JobCard',
    props: {
        job: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isFlipped: false,
        };
    },
    methods: {
        flipCard() {
            this.isFlipped = !this.isFlipped;
        },
    },
};
</script>

<style scoped>

.job-card  {
    
    height: 240px;
    width: 100%;
    transition: transform 0.8s;
    padding: 20px;

    .job-card-front {
        display: block;

        * {
            text-align: center;
        }
    }
    .job-card-back {
        transition: transform 0.8s;

        height: 100%;
        display: flex;
        justify-content: left;



        display: none;
    }
}

.job-card.flipped {
    
    transform: rotateY(180deg);

    .job-card-front {
        display: none; 
    }
    .job-card-back {
        display: block;
        transform: rotateY(180deg);
    }
}

.job-logo {
    object-fit: none !important;

    height: 120px;
}
</style>
