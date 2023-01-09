import styled from "styled-components";

const Sidebar = styled.aside`
  width: 200px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = { Sidebar };
