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
    margin-top: 112px;
  }
`;
const MainContainer = styled.main`
  flex: 1;
  width: calc(100% - 220px);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100vw;
    overflow-x: hidden;
  }
`;

export const Styled = { PageContainer, MainContainer };
