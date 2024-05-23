import * as S from "./ProjectName.styled.js";

const ProjectName = () => {
  return (
    <>
      <S.Styling>
        <S.GetHover />
      </S.Styling>
      <S.Block1>
        <S.LeftSide>Project Name</S.LeftSide>
        <S.RightSide>
          <div className="someText">11/22</div>
          <div className="anotherText">Education</div>
        </S.RightSide>
      </S.Block1>
      <S.TextAnother>
        Lorem ipsum dolor sit amet consectetur. Orci magna mauris aenean egestas
        sed turpis nisl ut.
      </S.TextAnother>
    </>
  );
};
export default ProjectName;
