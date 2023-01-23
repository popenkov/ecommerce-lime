import styled from "styled-components";

import { box, flexCenter, flexColumnCenter, font } from "@src/styles/mixins";

const Confirmation = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
`;

const ConfirmationWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  max-width: 321px;
  padding: 12px 8px;
  border-radius: 0px 0px 10px 10px;
  background-color: ${({ theme }) => theme.color.white};

  ${font({ size: "14", lineHeight: "17", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 200px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 9px;
`;

const PriceTitle = styled.span`
  ${font({ size: "8", lineHeight: "10", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.3;
`;

const PriceValue = styled.span`
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
`;

const OrderButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 8px;
  background: #a1d214;
  border-radius: 10px;
  ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};
`;

const OrderIcon = styled.span`
  position: relative;
  margin-right: 18px;

  & svg path {
    fill: ${({ theme }) => theme.color.black};
  }
`;

const OrderAmount = styled.span`
  position: absolute;
  top: -3px;
  right: -8px;
  z-index: 2;

  ${box(14)};
  ${flexCenter};
  border: 1px solid #a1d214;
  border-radius: 100px;

  background-color: ${({ theme }) => theme.color.white};

  ${font({ size: "8", lineHeight: "10", fontWeight: "500" })};
  color: ${({ theme }) => theme.color.black};
`;

export const Styled = {
  Confirmation,
  ConfirmationWrapper,
  PriceContainer,
  PriceTitle,
  PriceValue,
  OrderButton,
  OrderIcon,
  OrderAmount,
};
