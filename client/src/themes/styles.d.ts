import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        fonts: {
            main: string,
            secondary: string,
        },
        colors: {
            primaryBlue: string,
            secondaryBlue: string,
            primaryText: string,
            secondaryText: string,
            accentColor: string,
            errorColor: string,
            warningColor: string,
            successColor: string,
        },
        padding: {
            xlarge: string,
            large: string,
            medium: string,
            small: string
        },
        margin: {
            xlarge: string,
            large: string,
            medium: string,
            small: string
        },
        breakpoints: {
            large: string,
            medium: string,
            small: string,
            mobile: string,
            mobileSmall: string,
        },
        transitions: {
            default: string,
            cubicBezier: string,
        }
    }
}