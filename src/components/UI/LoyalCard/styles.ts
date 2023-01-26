import styled from "styled-components";

import { box, flexCenter, font } from "@src/styles/mixins";

const Card = styled.section`
  flex: 1;
  position: relative;
  padding: 13px 16px;

  background: linear-gradient(180deg, #a1d214 0%, #87c04f 100%);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const LogoContainer = styled.div`
  ${box(79)};
  ${flexCenter};
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  margin-bottom: 36px;

  & svg {
    width: 66px;
    height: 43px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const CardNumber = styled.span`
  ${font({ size: "18", lineHeight: "22", fontWeight: "700" })}
  color: ${({ theme }) => theme.color.black};
`;

export const Styled = {
  Card,
  LogoContainer,
  CardNumber,
};
