import * as S from "./Project.styled.js";
import ProjectName from "../../components/ProjectName/ProjectName.jsx";
import {
  Handle,
  Parent,
  ParentRight,
} from "/src/components/ProjectName/ProjectName.styled.js";
const Project = () => {
  return (
    <S.ProjectStyle>
      <S.Project>Projects</S.Project>
      <Handle>
        <Parent>
          <ProjectName />
        </Parent>
        <ParentRight>
          <ProjectName />
        </ParentRight>
        <Parent>
          <ProjectName />
        </Parent>
        <ParentRight>
          <ProjectName />
        </ParentRight>
      </Handle>
    </S.ProjectStyle>
  );
};
export default Project;
