import styled from 'styled-components';

const PageContainer = styled.main`
  display: flex;
  gap: 20px;
  padding: 0 20px;
  max-width: 1280px;

  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;
const MainContainer = styled.main`
  flex: 1;
  max-width: calc(100% - 220px);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

export const Styled = { PageContainer, MainContainer };
