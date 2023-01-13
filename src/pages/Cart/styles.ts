import { font } from "@src/styles/mixins";
import styled from "styled-components";

const PageContainer = styled.main`
  display: flex;
  gap: 20px;

  padding-left: 20px;
  max-width: 1280px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0;
  }
`;
const Items = styled.div`
  width: 100%;
  max-width: 826px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Title = styled.h2`
  margin-bottom: 38px;
  ${font({ size: "18", lineHeight: "22", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const AddedItems = styled.div`
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Data = styled.div`
  width: 100%;
  max-width: 376px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = { PageContainer, Items, Title, Data, AddedItems };
