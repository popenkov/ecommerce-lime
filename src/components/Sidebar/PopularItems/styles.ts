import { flexCenter, flexColumnCenter, font } from "@src/styles/mixins";
import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";

const PopularContainer = styled.div`
  margin-bottom: 10px;
`;

const PopularTitle = styled.h3`
  margin-bottom: 8px;
  ${font({ size: "6", lineHeight: "7", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const PopularItems = styled(PerfectScrollbar)`
  display: flex;
  gap: 4px;
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 321px;
  padding-bottom: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 200px;
  }

  & .ps__rail-x {
    bottom: 0px;
    height: 2px;
    background: #c7c7c7;
    opacity: 0.3;
    border-radius: 5px;
  }

  & .ps__thumb-x {
    cursor: pointer;
    bottom: 0;
    width: 40px;
    height: 2px;
    background: ${({ theme }) => theme.color.white};

    border-radius: 5px;
  }

  & .ps__rail-x:hover > .ps__thumb-x {
    width: 40px;
    height: 2px;
    background: ${({ theme }) => theme.color.white};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = { PopularContainer, PopularItems, PopularTitle };
