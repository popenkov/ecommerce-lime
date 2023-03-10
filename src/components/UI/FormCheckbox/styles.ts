import styled from "styled-components";

import { box, flexCenter, font } from "@src/styles/mixins";

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 7px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}) {
  }
`;

const CheckboxCheck = styled.span`
  ${box(25)};
  min-width: 25px;

  ${flexCenter};
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  transition: all 0.2s;
`;

const Checkbox = styled.div`
  ${flexCenter};
  position: relative;
  width: 28px;
  min-width: 28px;
  height: 28px;
  min-height: 28px;
  margin-right: 13px;
  border: 1px solid ${({ theme }) => theme.color.greyBorder};
  cursor: pointer;

  input[type="checkbox"] {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;

    &:checked ~ ${CheckboxCheck} {
      background-color: ${({ theme }) => theme.color.green};
    }
  }
`;

const CheckboxLabel = styled.label`
  ${font({ size: "14", lineHeight: "32", fontWeight: "600" })};
  color: ${({ theme }) => theme.color.black};
  cursor: pointer;
`;

export const Styled = {
  CheckboxWrapper,
  Checkbox,
  CheckboxCheck,
  CheckboxLabel,
};
