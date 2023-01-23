import styled from "styled-components";

import { flexCenter, font } from "@src/styles/mixins";

const OrderDescription = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 208px;
  height: 100%;
  padding: 21px 14px 18px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 24px;
`;

const Date = styled.span`
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })}
  color: ${({ theme }) => theme.color.black};
`;

const Time = styled.span`
  ${font({ size: "14", lineHeight: "17", fontWeight: "500" })}
  color: ${({ theme }) => theme.color.black};
  opacity: 0.5;
`;

const Address = styled.span`
  flex-grow: 1;
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })}
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 32px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 16px;
`;

const PriceText = styled.span`
  ${font({ size: "12", lineHeight: "15", fontWeight: "400" })}
  color: ${({ theme }) => theme.color.black};
`;

const PriceValue = styled.span`
  ${font({ size: "18", lineHeight: "22", fontWeight: "700" })}
  color: ${({ theme }) => theme.color.orange};
`;

const RepeatOrderButton = styled.button`
  box-sizing: border-box;
  ${flexCenter};
  width: 100%;
  padding: 15px 23px;
  background-color: ${({ theme }) => theme.color.green};
  border-radius: 5px;
  ${font({ size: "12", lineHeight: "15", fontWeight: "700" })}
  color: ${({ theme }) => theme.color.black};
`;

export const Styled = {
  OrderDescription,
  DateContainer,
  Date,
  Time,
  Address,
  PriceContainer,
  PriceText,
  PriceValue,
  RepeatOrderButton,
};
