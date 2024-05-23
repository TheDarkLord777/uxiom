import styled, { keyframes } from "styled-components";
const AnimateIt = keyframes`
0%{
    transform: translate(0px);
}
    50%{
        transform: translate(-60px,20px);
    }
    75%{
        transform: translate(0px,30px);
    }
    100%{
        transform: translate(0px);
    }
`;
const AnimateThis = keyframes`
0%{
    transform: translate(0px);
}
50%{
    transform: translate(50px,-20px);
}
    75%{
        transform: translate(0px,20px);
    }
100%{
    transform: translate(0px);
}`;
export const Style = styled.div`
  background-color: black;
  width: 100%;
  height: 500vh;
  font-family: Chivo, sans-serif;
  font-weight: 400;
`;
export const Wrapper = styled.div`
  height: 100vh;
  background: #f9f9f9;
  margin: 0 2.5%;
  box-sizing: border-box;
`;
export const Header = styled.div`
  position: fixed;
  width: 100%;
  height: 171px;
  color: black;
  font-size: 20px;
  display: flex;
  margin-top: 32px;
  z-index: 3;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 55%;
  height: 75px;
  background-color: #f9f9f9;
  padding-right: 32px;
  box-sizing: border-box;
  gap: 4%;
  z-index: 1;
  border-top-right-radius: 20px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  height: 75px;
  background-color: #f9f9f9;
  border-top-left-radius: 20px;
  z-index: 1;
  padding-left: 32px;
  box-sizing: border-box;
`;
export const Uxiom = styled.div``;
export const H3 = styled.div`
  display: flex;
  letter-spacing: 12px;
  font-size: 25px;
`;

export const Logo = styled.div`
  position: absolute;
  left: 104px;
  top: 26px;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background: #ffe66b;
`;
export const Circle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #f9f9f9;
  margin-top: 15px;
`;

export const BackBlack = styled.div`
  position: absolute;
  top: -32px;
  left: -2.5%;
  background-color: black;
  height: 91px;
  width: 100%;
`;

export const FadeWindow = styled.div`
  position: fixed;
  top: 107px;
  width: 95%;
  box-sizing: border-box;
  height: 96px;
  z-index: 3;
  background: linear-gradient(
    to bottom,
    rgba(249, 249, 249, 1),
    rgba(249, 249, 249, 0)
  );
`;
export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
export const HighBlock = styled.div`
  width: 100%;
  height: 30vh;
`;
export const LowBlock = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: space-around;
`;
export const LeftBlock = styled.div`
  width: 52%;
  padding-left: 5%;
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-weight: 400;
  font-size: 3.3em;
  line-height: 70px;
  word-spacing: 10px;
`;

export const P = styled.div`
  font-size: 1.5em;
  line-height: 35px;
`;

export const RightBlock = styled.div`
  width: 32%;
`;
export const BigCircle = styled.div`
  width: 335px;
  height: 331px;
  background: #ffe66b;
  border-radius: 50%;
  animation: ${AnimateThis} 7s ease-out infinite;
`;

export const SmallCircle = styled.div`
  display: inline-block;
  width: 101px;
  height: 100px;
  background: #000000;
  border-radius: 50%;
  margin-top: 69%;
  animation: ${AnimateIt} 7s ease-out infinite;
`;
export const CustomUxiomText = styled.div`
  background: url("/src/assets/images/Group.png") no-repeat center;
  width: 114px;
  height: 23px;
`;
