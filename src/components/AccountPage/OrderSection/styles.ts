import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";
import { flexCenter, font } from "@src/styles/mixins";
import { Link } from "react-router-dom";

const OrderSection = styled.article`
  display: flex;
  margin-bottom: 15px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const OrderData = styled.div``;

const OrderProducts = styled(PerfectScrollbar)`
  position: relative;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 9px;
    flex-wrap: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;

    & .ps__rail-x {
      bottom: 0px;
      height: 3px;
      background: #c7c7c7;
      opacity: 0.2;
      border-radius: 5px;
    }

    & .ps__thumb-x {
      cursor: pointer;
      bottom: 0;
      width: 40px;
      height: 3px;
      background: ${({ theme }) => theme.color.black};
      opacity: 0.3;

      border-radius: 5px;
    }

    & .ps__rail-x:hover {
      height: 3px;
      background: #c7c7c7;
      opacity: 0.2;
      border-radius: 5px;
    }
    & .ps__rail-x:hover > .ps__thumb-x {
      width: 40px;
      height: 3px;
      background: ${({ theme }) => theme.color.white};
    }
  }
`;

const ProductContainer = styled.div`
  min-width: 201px;
`;
const Shadow = styled.div`
  position: absolute;
  right: 0;
  width: 112px;
  height: 100%;

  ${flexCenter};

  background: linear-gradient(270deg, #ffffff 27.68%, rgba(255, 255, 255, 0) 100%);
  border-radius: 10px;
`;

const ShowAllLButton = styled.button`
  position: absolute;
  top: 137px;
  right: -35px;
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;

  text-decoration: none;
  transform: rotate(-90deg);
`;

const LinkText = styled.span`
  ${font({ size: "14", lineHeight: "17", fontWeight: "400" })}
  color: ${({ theme }) => theme.color.black};
  white-space: nowrap;
`;
const LinkIconContainer = styled.span`
  margin-left: 15px;
`;

export const Styled = {
  OrderSection,
  OrderData,
  OrderProducts,
  ProductContainer,
  Shadow,
  ShowAllLButton,
  LinkIconContainer,
  LinkText,
};
