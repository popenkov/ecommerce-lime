import styled from "styled-components";

const Advantages = styled.div`
  display: flex;
  gap: 25px;
  margin-bottom: 5px;
  margin-left: 35px;
  margin-right: 30px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 20px;
    margin: 0 11px 5px;
  }
`;

export const Styled = { Advantages };
