import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {

        --color-text-light-blue: #d0d6f9;
        --color-text-main: #fff;
    }



    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        max-width: 100%;
        font-size: 100%;
        color: var(--color-text-main);
        font-family: 'Barlow Condensed', sans-serif;
    }

    h1 {
        font-size: 150px;
        color: var(--color-text-main);
        font-family: 'Bellefair', serif;
        font-weight: 200;
        @media (max-width: 500px) {
            font-size: 5em;
        }
    }
    h5 {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 28px;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 4.725px;
        font-family: 'Barlow Condensed', sans-serif;
        color: var(--color-text-light-blue);
        @media (max-width: 768px) {
            font-size: 20px;
        }
        @media (max-width: 500px) {
            font-size: 1em;
        }
    }
    p {
        color: var(--color-text-light-blue);
        font-size: 18px;
        line-height: 32px;
        letter-spacing: 1.1px;
        @media (max-width: 768px) {
            font-size: 1em;
        }
        @media (max-width: 500px) {
            font-size: .92em;
        }
    }
`
export default GlobalStyle