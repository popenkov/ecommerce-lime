import styled from "styled-components";

const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 6;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
  }
`;

export const Styled = { Header };
