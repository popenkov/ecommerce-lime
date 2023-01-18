import styled from "styled-components";

const Container = styled.section`
  display: flex;
  gap: 21px;
  margin-bottom: 40px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 100%;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

const ReceiptsContainer = styled.div`
  width: calc(100% - 294px);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 100%;
  }
`;

export const Styled = { Container, ReceiptsContainer };
