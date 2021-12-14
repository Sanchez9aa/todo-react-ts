import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    font-family: Roboto, sans-serif;
}
`

export const MainBody = styled.div`
background: rgb(14,10,84);
background: linear-gradient(180deg, rgba(14,10,84,1) 0%, rgba(9,9,121,1) 70%, rgba(0,87,105,1) 100%);
min-height: 100vh;
`
export const MainTitle = styled.h1`
display: flex;
color:white;
justify-content: center;
font-size: 40px;
height: 100px;
align-items: center;
`