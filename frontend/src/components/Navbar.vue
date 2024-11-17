<template>
    <v-app-bar :color="isDark ? 'background' : 'primary'" app class="app-bar">
        <v-app-bar-nav-icon>
            <v-icon>mdi-vuetify</v-icon>
        </v-app-bar-nav-icon>
        <v-toolbar-title class="ml-2">Painel de empregos</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-text-field
            v-model="searchQuery"
            prepend-inner-icon="mdi-magnify"
            label="Pesquisar"
            hide-details
            dense
            solo-inverted
            class="mr-3"
            style="max-width: 250px;"
            @keyup.enter="emitFilter"
        ></v-text-field>

        <v-btn icon @click="toggleTheme" class="mr-2">
            <v-icon>{{ isDark ? 'mdi-brightness-7' : 'mdi-brightness-4' }}</v-icon>
        </v-btn>

        <v-btn @click="openNewJobModal">Novo</v-btn>
    </v-app-bar>
</template>

<script>
import { ref, watch } from 'vue';
import { useTheme } from 'vuetify/lib/framework.mjs';

export default {
    name: 'NavBar',
    props: {
        onNewJob: Function,
    },
    setup(_, { emit }) {
        const theme = useTheme();
        const isDark = ref(theme.global.current.value.dark);
        const searchQuery = ref('');

        const toggleTheme = () => {
            theme.global.name.value = isDark.value ? 'light' : 'dark';
        };

        const emitFilter = () => {
            emit('update-filter', searchQuery.value);
        };

        const openNewJobModal = () => {
            emit('open-new-job-modal');
        };

        watch(() => theme.global.name.value, (newTheme) => {
            isDark.value = newTheme === 'dark';
        });

        return {
            isDark,
            toggleTheme,
            searchQuery,
            emitFilter,
            openNewJobModal,
        };
    },
};
</script>

<style scoped>
.app-bar {
    padding: 5px;
}
</style>
