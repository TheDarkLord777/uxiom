import styled from "styled-components";
export const Handle = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;
export const Parent = styled.div`
  width: 40%;
  height: 590px;
  margin-left: 8%;
`;
export const ParentRight = styled(Parent)`
  margin-left: 0;
  margin-right: 8%;
`;
export const TextAnother = styled.div`
  margin-top: 32px;
  font-size: 1em;
`;
export const Block1 = styled.div`
  margin-top: 30px;
  display: flex;
`;
export const LeftSide = styled.div`
  width: 60%;
  font-size: 2.125em;
`;
export const RightSide = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
  font-size: 1em;
`;
export const GetHover = styled.div`
  opacity: 0.4;
  width: 150px;
  height: 150px;
  background: yellow;
  border-top-left-radius: 30px;
  position: absolute;
  top: 0;
  transition: opacity 0.3s;
`;
export const Styling = styled.div`
  border-top-left-radius: 30px;
  width: 100%;
  height: 400px;
  background: url("/src/assets/images/Rectangle 17.png") no-repeat center;
  position: relative;
  z-index: 2;
  &:hover {
    ${GetHover} {
      opacity: 1;
      transform: scale(1.1);
    }
  }
`;

// export const Something = styled(Parent)`
//   width: 30%;
// `;
