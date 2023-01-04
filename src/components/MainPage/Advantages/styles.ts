import styled from 'styled-components';

const Advantages = styled.div`
  display: flex;
  gap: 25px;
  margin-bottom: 40px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
  }
`;

export const Styled = { Advantages };
