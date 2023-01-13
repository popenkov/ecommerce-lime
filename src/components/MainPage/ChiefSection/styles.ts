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

export const Styled = { Container };
