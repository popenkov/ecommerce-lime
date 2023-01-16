import { flexAlignCenter, flexCenter, font } from "@src/styles/mixins";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const TotalValue = styled.div`
  padding: 20px 26px;
  background-color: ${({ theme }) => theme.color.greyLightBg};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.green};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
`;

const ValuesContainer = styled.div`
  margin-bottom: 13px;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
  margin-bottom: 12px;
`;

const ItemKey = styled.span`
  ${font({ size: "10", lineHeight: "12", fontWeight: "400" })}
  color: ${({ theme }) => theme.color.black};
  opacity: 0.7;
`;

const ItemValue = styled.span<{
  valueColor?: string;
  isAccended?: boolean;
}>`
  ${font({ size: "14", lineHeight: "17", fontWeight: "700" })}
  color: ${({ theme }) => theme.color.black};

  ${({ valueColor }) =>
    !!valueColor &&
    css`
      color: ${valueColor};
    `};

  ${({ isAccended }) =>
    isAccended &&
    css`
      ${font({ size: "32", lineHeight: "39", fontWeight: "700" })}
    `};
`;

const SubmitButton = styled.button`
  width: 100%;
  ${flexCenter};
  padding: 16px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 20px ${({ theme }) => theme.color.white};
  border-radius: 5px;

  ${font({ size: "16", lineHeight: "20", fontWeight: "700" })}
  color: ${({ theme }) => theme.color.black};
`;

const PromoLink = styled(Link)`
  display: flex;
  justify-content: center;
  margin-top: 15px;

  ${font({ size: "12", lineHeight: "15", fontWeight: "400" })}
  text-decoration-line: underline;
  color: ${({ theme }) => theme.color.black};
  opacity: 0.7;
`;

export const Styled = {
  TotalValue,
  ValuesContainer,
  ItemContainer,
  ItemKey,
  ItemValue,
  SubmitButton,
  PromoLink,
};
