import styled from "styled-components";

import { font } from "@src/styles/mixins";

const Step = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 34px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const Img = styled.img`
  width: 100%;
  max-width: 397px;
  margin-right: 36px;
  object-fit: contain;
  border-radius: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-right: 0;
    height: 222px;
    object-fit: cover;
    margin-bottom: 33px;
  }
`;

const Description = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Title = styled.h3`
  margin-bottom: 34px;
  ${font({ size: "18", lineHeight: "22", fontWeight: "700" })}
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const Text = styled.p`
  ${font({ size: "12", lineHeight: "24", fontWeight: "400" })}
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 13px;
  }
`;

export const Styled = {
  Step,
  Img,
  Description,
  Title,
  Text,
};
