import { Link } from "react-router-dom";
import styled from "styled-components";

import { box, font } from "@src/styles/mixins";

const Container = styled.div`
  position: relative;
  display: flex;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const IconContainer = styled.div`
  margin-right: 36px;
  & svg {
    ${box(190)}

    & path {
      fill: ${({ theme }) => theme.color.green};
    }
  }
`;

const TextContainer = styled.div`
  max-width: 358px;
`;

const Title = styled.h2`
  margin-bottom: 16px;
  ${font({ size: "24", lineHeight: "29", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
`;

const Text = styled.span`
  display: block;
  margin-bottom: 22px;
  ${font({ size: "14", lineHeight: "24", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.7;
`;

const CatalogButton = styled(Link)`
  display: inline-block;
  padding: 9px 30px;
  border: 1px solid ${({ theme }) => theme.color.green};
  border-radius: 5px;
  text-decoration: none;

  ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
`;

export const Styled = {
  Container,
  IconContainer,
  TextContainer,
  Title,
  Text,
  CatalogButton,
};
