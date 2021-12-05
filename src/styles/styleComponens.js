import styled from "styled-components";

export const CenterContent = styled.div`
display: flex;
align-items: center;
`

export const CardOptionsNote = styled.small`
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`;

export const InputForm = styled.form`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    transition: all 1s;
    width: 50px;
    height: 50px;
    background: white;
    box-sizing: border-box;
    border-radius: 25px;
    border: 4px solid white;
    padding: 5px;
`;

export const Button = styled.button`
    display: block;
    width: 100%;
    min-width: 50px;
    max-width: 500px;
    background: #ffffff;
    border: 1px solid;
    box-shadow: 2px 4px;
    padding: 8px;
    margin: 5px;
    cursor: pointer;
      &:active{
    transform:translateX(2px) translateY(2px);
    box-shadow: 0.5px 1.5px;
  }
`

export const BoxInner = styled.div`
  position: relative;
  padding: 40px;
  display:flex;
  align-items:center;
  flex-direction:column;
`

export const BoxCard = styled.div`
    width: 100%;
    min-width: 50px;
    max-width: 500px;
    margin: 15px;
    padding: 15px;
    border: 1px solid;
    box-shadow: 2px 4px;
    display:flex;
    align-items:center;
    flex-direction:column;
    background-color: #FFFFFF;
`

export const Background = styled.div`
  padding: 0;
  margin: 0;
  position: relative;
  display:flex;
  align-items:center;
  flex-direction:column;
  background-size: cover;
  background-color: ${props => props.color}
`