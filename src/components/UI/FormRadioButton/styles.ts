import styled from "styled-components";
import CheckIcon from "@src/assets/icons/check-green.svg";

import { box, flexCenter, font } from "@src/styles/mixins";

const CheckboxLabel = styled.label`
  position: relative;
  width: 100%;
  ${flexCenter};
  padding: 15px 9px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
  cursor: pointer;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 16px;

  input[type="radio"] {
    position: absolute;
    opacity: 0;
    visibility: hidden;
  }

  input[type="radio"]:checked ~ ${CheckboxLabel} {
    border: 2px solid #a1d214;
    border-radius: 5px;

    &::before {
      content: "";
      position: absolute;
      z-index: 2;
      background-image: url(${CheckIcon});
      ${box(20)};
      top: -12px;
      left: -12px;
    }
  }
`;

const Checkbox = styled.div``;

export const Styled = {
  CheckboxWrapper,
  Checkbox,
  CheckboxLabel,
};
