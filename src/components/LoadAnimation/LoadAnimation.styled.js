import styled, { keyframes } from "styled-components";
// document.body.style.overflow = "hidden";
// setTimeout(() => {
//   document.body.style.overflow = "visible";
// }, 4500);

const Faded = keyframes`
from{
    opacity: 1;
    z-index: 999;
    display: flex;
}
to{
    opacity:0;
    z-index: 1;
    display: none;
}`;
const UxiomMiniCircle = keyframes`
from{
    opacity:0;
}
to{
    opacity: 1;
    
}`;

const UxiomCircle = keyframes`
0%{
    transform: scale(5) rotate(120deg);
    opacity: 1;
}
    50%{
        transform:scale(8) ;
    }
    100%{
        transform: scale(1) rotate(0);
        opacity: 1;
       
    }
`;

const UxiomText = keyframes`
from{
    opacity:0;
}
    to{
        opacity: 1;
    }
`;

export const Style = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation: ${Faded} 1s ease-in-out 4s forwards;
`;
export const Uxiom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 200px;
  height: 100px;
`;
export const Circle = styled.div`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background-color: #ffe66b;
  opacity: 0;
  animation: ${UxiomCircle} 1s ease-in-out 1s forwards;
`;

export const MiniCircle = styled.div`
  display: inline-block;
  margin-top: 20px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ffffff;
  opacity: 0;
  animation: ${UxiomMiniCircle} 0.5s ease-in-out 1.2s forwards;
`;

export const Text = styled.div`
  position: absolute;
  opacity: 0;
  top: 32px;
  left: -13px;
  font-size: 2em;
  letter-spacing: 0.55em;
  animation: ${UxiomText} 2s ease-in-out 2s forwards;
`;
