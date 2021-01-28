import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Poppins', sans-serif;
        background-color: #eff1ff;
        outline: none;
    }

    button {
        cursor: pointer;
    }
`