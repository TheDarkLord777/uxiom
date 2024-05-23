import styled, { keyframes } from "styled-components";
const scaleButton = keyframes`
from{
    transform: scaleX(1);
    //border-top-right-radius:24px;
    //border-bottom-right-radius:24px;
    
}
to{
    transform: scaleX(1.2);
    //border-top-right-radius:0;
    //border-bottom-right-radius:0;
   
}`;

const Button = styled.button`
  width: 120px;
  height: 44px;
  background: black;
  color: white;
  border-radius: 24px;
  cursor: pointer;
  &:hover {
    animation: ${scaleButton} 0.2s ease-in-out forwards;
  }
`;
export default Button;
