import { Link } from "react-router-dom";
import styled from "styled-components";

import { font } from "@src/styles/mixins";

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 159px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
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

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Text = styled.p`
  ${font({ size: "12", lineHeight: "15", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const MoreLink = styled(Link)`
  margin-left: 5px;
  ${font({ size: "12", lineHeight: "15", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.green};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = {
  Item,
  Name,
  Text,
  MoreLink,
};
