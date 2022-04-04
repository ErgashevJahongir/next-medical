import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
}

*,
body {
    margin: 0;
    padding: 0;
}

body {
    color: #333;
    background-color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
}

p,
article,
section {
    line-height: 1.5;
}

/* :focus {
    outline: 0.15rem solid var(--heading-bg);
    outline-offset: 0.25rem;
} */

main:focus {
    outline: none;
}

img {
    max-width: 100%;
}
`;

export default GlobalStyle;
