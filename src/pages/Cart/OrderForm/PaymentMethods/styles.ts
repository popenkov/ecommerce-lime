import { font } from "@src/styles/mixins";
import styled from "styled-components";

const PaymentMethods = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  margin-bottom: 15px;
  padding: 23px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const InputWrapper = styled.div``;

export const Styled = {
  PaymentMethods,
  InputWrapper,
};
