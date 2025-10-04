import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";
import { StyledButton } from "@/common/Button/styles";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange } = useForm(validate);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Block title={title} content={content} />
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <FormGroup
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" value="contact" />

            <Col span={24}>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={values.name || ""}
                onChange={handleChange}
                required
              />
              <ValidationType type="name" />
            </Col>
            <Col span={24}>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={values.email || ""}
                onChange={handleChange}
                required
              />
              <ValidationType type="email" />
            </Col>
            <Col span={24}>
              <TextArea
                placeholder="Your Message"
                value={values.message || ""}
                name="message"
                onChange={handleChange}
                required
              />
              <ValidationType type="message" />
            </Col>
            <ButtonContainer>
              <StyledButton type="submit" name="submit">
                {t("Submit")}
              </StyledButton>
            </ButtonContainer>
          </FormGroup>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
