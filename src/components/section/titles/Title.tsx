import InfoButton from "components/buttons/InfoButton";
import JoinUsButton from "components/buttons/JoinUsButton";
import AnimationSection from "components/motions/AnimationSection";
import React from "react";
import styled, { css } from "styled-components";
interface TitleTypes {
  text: {
    styledText: string;
    unStyledText: string;
    paragraph: string;
    paragraph2?: string;
  };
}

const Title = ({ text }: TitleTypes) => {
  return (
    <AnimationSection>
      <TextWrapper>
        <Text>
          {text.styledText}
          <TextWtihe>{text.unStyledText}</TextWtihe>
        </Text>
        <Paragraph>{text.paragraph}</Paragraph>
        {text.paragraph2 ? <Paragraph>{text.paragraph2}</Paragraph> : null}
        <ButtonWrapper>
          <JoinUsButton num={2} />
          <InfoButton />
        </ButtonWrapper>
      </TextWrapper>
    </AnimationSection>
  );
};

export default Title;
const TextWrapper = styled.div(
  () => css`
    width: 650px;
    height: 650px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    flex-direction: column;
    gap: 16px;
    @media (max-width: 1400px) {
      align-items: center;
      text-align: center;
    }
  `
);
const Text = styled.p(
  () => css`
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 52px;
    line-height: 140%;
    display: flex;
    flex-direction: column;
    color: #a9deee;
    @media (max-width: 1400px) {
      font-size: 40px;
    }
    @media (max-width: 410px) {
      font-size: 30px;
    }
  `
);
const TextWtihe = styled.span(
  () => css`
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 52px;
    line-height: 140%;
    color: #ffffff;
    @media (max-width: 1400px) {
      font-size: 40px;
    }
    @media (max-width: 410px) {
      font-size: 30px;
    }
  `
);

const Paragraph = styled.p(
  () => css`
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 190%;
    color: rgba(250, 250, 250, 0.8);
    @media (max-width: 1400px) {
      width: 400px;
      font-size: 16px;
    }
    @media (max-width: 410px) {
      width: 300px;
    }
  `
);

const ButtonWrapper = styled.div(
  () => css`
    height: 86px;
    display: flex;
    align-items: center;
    gap: 48px;
    @media (max-width: 460px) {
      flex-direction: column;
      height: 200px;
      gap: 24px;
    }
  `
);
