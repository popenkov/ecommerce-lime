import styled from "styled-components";

import { font } from "@src/styles/mixins";

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 159px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const Name = styled.p`
  display: flex;
  margin-bottom: 5px;
  ${font({ size: "10", lineHeight: "24", fontWeight: "600" })};
  color: ${({ theme }) => theme.color.black};

  & svg {
    margin-right: 10px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

const Text = styled.p`
  ${font({ size: "12", lineHeight: "15", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

export const Styled = {
  Item,
  Name,
  Text,
};
