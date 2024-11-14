// src/plugins/vuetify.js
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

export default createVuetify({
    theme: {
        defaultTheme: 'dark', // Define o tema escuro como padrão
        themes: {
            light: {
                colors: {
                    primary: '#707070',
                    secondary: '#ff9800',
                    background: '#f5f5f5',
                    surface: '#ffffff',
                    onPrimary: '#ffffff',
                    onSecondary: '#000000',
                },
            },
            dark: {
                colors: {
                    primary: '#1e88e5', // Azul escuro moderno
                    secondary: '#ff9800', // Laranja para contraste
                    background: '#121212', // Fundo escuro
                    surface: '#212121', // Elementos em tom mais claro que o fundo
                    onPrimary: '#ffffff',
                    onSecondary: '#ffffff',
                },
            },
        },
    },
});
