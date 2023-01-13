import { box, font } from "@src/styles/mixins";
import styled, { css } from "styled-components";

const Interview = styled.div<{ background: string }>`
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 273px;
  min-width: 273px;
  height: 357px;
  padding: 21px 25px;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid rgba(51, 51, 51, 0.05);
  border-radius: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc(100% - 26px);
    margin: 0 auto;
    height: 240px;
  }

  ${({ background }) =>
    background &&
    css`
      background-image: url(${background});
    `};
`;

const Description = styled.div`
  position: relative;
`;

const DescriptionTitle = styled.h3`
  margin-bottom: 12px;
  ${font({ size: "18", lineHeight: "24", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.white};
`;

const DescriptionSubtitle = styled.span`
  ${font({ size: "12", lineHeight: "15", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.white};
  opacity: 0.7;
`;

const PlayLink = styled.a`
  position: absolute;
  right: 0;
  bottom: 0;

  ${box(38)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  outline: ${({ theme }) => theme.color.white} solid 1px;
  outline-offset: 4px;

  & svg {
    padding-left: 3px;
  }

  &:hover svg path {
    fill: ${({ theme }) => theme.color.orange};
  }
`;

export const Styled = { Interview, Description, DescriptionTitle, DescriptionSubtitle, PlayLink };
