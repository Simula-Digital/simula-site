import { Row } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  NotHidden,
  CustomNavLinkSmall,
  Span,
} from "./styles";
import { CompanyHeaderText } from "../Footer/styles";
import { StyledMobileButton } from "@/common/Button/styles";

const Header = ({ t }: { t: TFunction }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer href="/" aria-label="homepage">
            <CompanyHeaderText>Simula Digital</CompanyHeaderText>
          </LogoContainer>
          <NotHidden>
            <CustomNavLinkSmall
              style={{ width: "180px" }}
              onClick={() => scrollTo("contact")}
            >
              <Span>
                <Button>{t("Contact")}</Button>
              </Span>
            </CustomNavLinkSmall>
          </NotHidden>

          <StyledMobileButton onClick={() => scrollTo("contact")}>
            {t("Contact")}
          </StyledMobileButton>
        </Row>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
