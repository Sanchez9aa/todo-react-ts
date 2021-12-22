import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import BG from '../assets/imgs/bg.jpg'

export const GlobalStyles = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    font-family: Roboto, sans-serif;
    background: url(${BG});
}
`

export const MainBody = styled.div`
min-height: 100vh;

h1{
    display: flex;
    color: #4B61D1;
    justify-content: center;
    font-size: 40px;
    height: 100px;
    align-items: center;
}
`