import styled from 'styled-components'

export const StyledSingleTask = styled.div`
  background: #FFBD35;
  font-size: 24px;
  color:#111;
  padding: 10px 20px;
  margin: 15px 10px;
  display:flex;
  justify-content:space-evenly;
  align-center:center;
  max-width: 1100px;
  border-radius: 10px;
  width: 100%;

  span{
    font-size: 21px;
    margin: 0 5px;
    flex: 2;
  }

  s{
    margin: 0 5px;
    font-size: 21px;
    flex: 2;
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