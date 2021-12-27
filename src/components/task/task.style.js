import styled from 'styled-components'

export const StyledSingleTask = styled.div`
  background: #FFBD35;
  font-size: 24px;
  color:#111;
  padding: 10px 20px;
  margin: 15px auto;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  max-width: 1100px;
  border-radius: 10px;
  width: 100%;

  span{
    font-size: 21px;
    margin: 0 5px;
    flex: 5;
  }

  s{
    margin: 0 5px;
    font-size: 21px;
    flex: 5;
  }

  @media screen and (max-width: 480px){
    width: 90%;
  }

`
export const SvgWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;

  > svg{
    margin: auto 5px;
    color: #333;
    cursor: pointer;
    font-size: 17px;
  }
`