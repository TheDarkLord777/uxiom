import Link from "../../components/shared/Link.jsx";
import Button from "../../components/shared/Button.jsx";
import Project from "../Projects/Projects.jsx";
import * as S from "./Home.styled.js";
import { useEffect, useState } from "react";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Style>
      <S.Wrapper>
        <S.Header>
          <S.Left>
            <S.Uxiom>
              {/*<S.CustomUxiomText></S.CustomUxiomText>*/}
              <S.H3 style={{ opacity: scrolled ? 0 : 1 }}>UXI M</S.H3>
              <S.Logo
                style={{
                  transform: scrolled
                    ? "translate(-70px) scale(1.5)"
                    : "translate(0px)",
                }}
              >
                <S.Circle></S.Circle>
              </S.Logo>
            </S.Uxiom>
          </S.Left>
          <S.Right>
            <Link>Projects</Link>
            <Link>Services</Link>
            <Link>About</Link>
            <Button>
              <Link style={{ color: "white" }}>Let`s Talk</Link>
            </Button>
          </S.Right>
          <S.BackBlack></S.BackBlack>
        </S.Header>
        <S.FadeWindow></S.FadeWindow>
        <S.Container>
          <S.HighBlock></S.HighBlock>
          <S.LowBlock>
            <S.LeftBlock>
              <S.H1>
                Hi, we are Uxiom.
                <br /> A web design agency <br /> based in Budapest.
              </S.H1>
              <S.P>
                We design and develop websites,
                <br /> web applications, and mobile apps <br /> that move
                business forward.
              </S.P>
            </S.LeftBlock>
            <S.RightBlock>
              <S.BigCircle>
                <S.SmallCircle></S.SmallCircle>
              </S.BigCircle>
            </S.RightBlock>
          </S.LowBlock>
        </S.Container>
        <Project></Project>
      </S.Wrapper>
    </S.Style>
  );
};

export default Home;
