import { lazy } from "react";
// import IntroContent from "../../content/IntroContent.json";
// import MiddleBlockContent from "../../content/MiddleBlockContent.json";
// import AboutContent from "../../content/AboutContent.json";
// import MissionContent from "../../content/MissionContent.json";
// import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
// const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
// const ContentBlock = lazy(() => import("../../components/ContentBlock"));

import WhiteLogo from "@/assets/white-logo-horizontal.png";
import JohnBanner from "@/assets/john-banner.png";
import KristinBanner from "@/assets/kristin-banner.png";

import styled from "styled-components";
import { Button } from "antd";

const StyledContainer = styled.div`
  margin-top: 16vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  text-align: center;

  @media only screen and (max-width: 890px) {
    height: auto;

    h2 {
      font-size: 28px;
    }
  }
`;
const StyledHeroImage = styled.img`
  width: 80%;
  max-width: 360px;
  margin-bottom: 48px;
`;

const StyledDescription = styled.p`
  margin-top: 30px;
  max-width: 480px;
  text-align: center;
  color: #e0e0e0;
`;

const StyledButton = styled(Button)`
  margin-top: 40px;
  padding: 16px 40px;
  height: auto;
  width: auto;
  font-size: 16px;
  font-weight: 500;
`;

const StyledDust = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 64px;
`;

const StyledDustDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  text-align: center;
  max-width: 480px;
  margin-top: 16px;
  margin-bottom: 32px;
`;

const StyledBannerImage = styled.img`
  width: 90%;
  max-width: 560px;
  margin-bottom: 32px;
  cursor: pointer;
  -webkit-user-drag: none;
  user-drag: none;
`;

const Home = () => {
  const scrollTo = () => {
    const element = document.getElementById("contact") as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <ScrollToTop />
      <StyledContainer>
        <StyledHeroImage src={WhiteLogo} />
        <h2>Your local partner for</h2>
        <h2 className="sub-color">design & development</h2>
        <StyledDescription>
          We help small businesses in Orlando grow online through thoughtful
          design, modern web experiences, and tailored software solutions.
        </StyledDescription>
        <StyledButton onClick={scrollTo}>Let's get started</StyledButton>
      </StyledContainer>
      <StyledDust>
        <div
          style={{
            color: "#4848ff",
          }}
        >
          ⋆˙⟡ Please pardon our dust ⟡˙⋆
        </div>
        <StyledDustDesc>
          We are currently redesigning our site. Take a look at our personal
          portfolios in the mean time to get to know us
        </StyledDustDesc>
        <a href="https://johnpcorreia.com" target="_blank">
          <StyledBannerImage src={JohnBanner} />
        </a>
        <a href="https://kristinbusitzky.com" target="_blank">
          <StyledBannerImage src={KristinBanner} />
        </a>
      </StyledDust>
      {/* <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      /> */}
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
