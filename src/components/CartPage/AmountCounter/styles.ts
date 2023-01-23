import styled from "styled-components";

import { box, flexCenter, font } from "@src/styles/mixins";

const Counter = styled.div`
  display: flex;
  align-items: center;
  margin: 0 12px;
`;

const Increment = styled.button`
  ${box(18)};
  ${flexCenter};
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  ${font({ size: "12", lineHeight: "15", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
`;

const Decrement = styled.button`
  ${box(18)};
  ${flexCenter};
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  ${font({ size: "12", lineHeight: "15", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
`;

const Value = styled.span`
  margin: 0 12px;
  ${font({ size: "12", lineHeight: "15", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
`;

export const Styled = {
  Counter,
  Increment,
  Decrement,
  Value,
};
