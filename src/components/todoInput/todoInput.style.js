import styled from 'styled-components'

export const TodoDiv = styled.div`
    display: flex;
    width: 100%;
    padding: 20px;
    justify-content: center;
    align-items:center;

    input {
			flex: 2;
    	padding: 20px;
    	display: flex;
    	height: 40px;
    	border: none;
    	border-radius: 15px;
    	color:black;
			margin: 0 20px;
			max-width: 400px;
    &:focus{
      outline: none;
    }
    }

    button{
			flex: 1;
			max-width: 70px;
      background: #4B61D1;
    	color: white;
    	font-size: 20px;
    	border-radius: 10px;
    	box-shadow: 0 0 1px 0 #ccc;
    	border: none;
    	padding: 10px;
    	cursor: pointer;
    	transition: 0.7s linear;
			height: 40px;
    &:hover{
      transform: scale(1.1)
    }
    &:active{
      transform: translateY(5px);
    }
    }
`