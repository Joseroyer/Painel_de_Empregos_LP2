<template>
    <v-app-bar :color="isDark ? 'background' : 'primary'" app class="app-bar">

        <v-app-bar-nav-icon>
            <v-icon>mdi-vuetify</v-icon>
        </v-app-bar-nav-icon>
        <v-toolbar-title class="ml-2">Painel de empregos</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-text-field v-model="searchQuery" prepend-inner-icon="mdi-magnify" label="Pesquisar" hide-details dense
            solo-inverted class="mr-3" style="max-width: 250px;" @keyup.enter="performSearch"></v-text-field>

        <v-btn icon @click="toggleTheme" class="mr-2">
            <v-icon>{{ isDark ? 'mdi-brightness-7' : 'mdi-brightness-4' }}</v-icon>
        </v-btn>

    </v-app-bar>
</template>

<script>
import { useTheme } from 'vuetify/lib/framework.mjs';
import { ref, watch } from 'vue';

export default {
    name: 'NavBar',
    setup() {
        const theme = useTheme();
        const isDark = ref(theme.global.current.value.dark);
        const searchQuery = ref('');

        const toggleTheme = () => {
            theme.global.name.value = isDark.value ? 'light' : 'dark';
        };

        watch(() => theme.global.name.value, (newTheme) => {
            isDark.value = newTheme === 'dark';
        });

        const onNewItem = () => {
            console.log('Novo item criado');
        };

        const performSearch = () => {
            console.log(`Buscando por: ${searchQuery.value}`);
        };

        return {
            isDark,
            toggleTheme,
            onNewItem,
            searchQuery,
            performSearch,
        };
    },
};
</script>

<style scoped>  
    .app-bar {
        padding: 5px;
    }
</style>
