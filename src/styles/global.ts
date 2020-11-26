import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Roboto', sans-serif;
    }

    body {
        width: 100%;
        height: 100vh;
    }
`