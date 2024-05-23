import * as S from "./LoadAnimation.styled.js";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";
const LoadAnimation = () => {
  return (
    <S.Style>
      <S.Uxiom>
        <S.Circle>
          <S.MiniCircle />
        </S.Circle>
        <S.Text>UXI M</S.Text>
      </S.Uxiom>
    </S.Style>
  );
};
export default LoadAnimation;
