import styled from 'styled-components'

export const TodoDiv = styled.div`
    display: flex;
    width: 100%;
    padding: 20px;
    position: fixed;
    justify-content: center;
    align-items:center;
`
export const TodoInputStyle = styled.input`
    background: transparent;
    padding: 20px;
    position: fixed;
    display: flex;
    justify-content: center;
    width: 70%;
    height: 43px;
    border: none;
    border-bottom: 1px solid white;
    border-radius: 15px;
    color:white;
    &:focus{
        outline: none;
    }
`

export const AddTask = styled.button`
    background: #4B61D1;
    color: white;
    font-size: 20px;
    position: absolute;
    border-radius: 10px;
    box-shadow: 0 0 1px 0 #ccc;
    right: 15%;
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: 0.7s linear;
    &:hover{
        transform: scale(1.1)
    }
    &:active{
        transform: translateY(5px);
    }
`