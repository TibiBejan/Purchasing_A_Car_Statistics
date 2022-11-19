import { DefaultTheme } from "styled-components";

const Theme: DefaultTheme = {
    fonts: {
        main: 'Inter, Avenir, Helvetica, Arial, sans-serif',
        secondary: 'Playfair Display',
    },
    colors: {
        primaryBlue: '#02020E',
        secondaryBlue: '#1A1B26',
        primaryText: '#F8F8F9',
        secondaryText: '#696A75',
        accentColor: '#D2BCA1',
        errorColor: '#fc8f76',
        warningColor: '#f7cc71',
        successColor: '#10cf98',
    },
    padding: {
        xlarge: '10rem',
        large: '7.5rem',
        medium: '5rem',
        small: '2.5rem'
    },
    margin: {
        xlarge: '10rem',
        large: '7.5rem',
        medium: '5rem',
        small: '2.5rem'
    },
    breakpoints: {
        large: '1366px',
        medium: '1024px',
        small: '768px',
        mobile: '550px',
        mobileSmall: '350px',
    },
    transitions: {
        default: '0.5s ease-in-out',
        cubicBezier: '0.75s cubic-bezier(0.4, 0, 0, 1)',
    }
}

export default Theme;