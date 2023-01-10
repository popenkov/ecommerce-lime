import { box, flexCenter, flexColumnCenter, font } from "@src/styles/mixins";
import styled from "styled-components";

const Counter = styled.div`
  ${flexColumnCenter};
  margin-right: 12px;
`;

const Increment = styled.button`
  ${font({ size: "12", lineHeight: "15", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.3;
`;
const Decrement = styled.button`
  ${font({ size: "12", lineHeight: "15", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.3;
`;
const Value = styled.span`
  ${font({ size: "12", lineHeight: "15", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
`;

export const Styled = {
  Counter,
  Increment,
  Decrement,
  Value,
};
