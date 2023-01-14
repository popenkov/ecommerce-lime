import styled, { css } from "styled-components";

import { absolutePseudoEl, box, font } from "@src/styles/mixins";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: relative;
`;

const Label = styled.label`
  position: relative;
  display: block;
  width: 100%;

  ${font({ size: "16", lineHeight: "24", fontWeight: "400" })}
  color: ${({ theme }) => theme.color.black};
`;

const Placeholder = styled.span<{ isInputFilled?: boolean; isInputRequired?: boolean; hasInputValue?: boolean }>`
  position: absolute;
  top: 14px;
  left: 20px;
  ${font({ size: "12", lineHeight: "15", fontWeight: "400" })}
  color: rgba(0, 0, 0, 0.5);

  ${(props) =>
    props.isInputFilled &&
    css`
      top: -23px;
      left: 20px;

      ${font({ size: "12", lineHeight: "20", fontWeight: "400" })}
      color: ${({ theme }) => theme.color.grey};
    `}

  ${(props) =>
    props.isInputRequired &&
    css`
      &::after {
        ${absolutePseudoEl};
        width: 4px;
        height: 4px;
        border-radius: 50%;
        top: -23px;
        right: -9px;
        background-color: ${({ theme }) => theme.color.red};
      }
    `}
`;

const Input = styled.input<{ hasInputError?: boolean; hasInputIcon?: boolean }>`
  width: calc(100% - 40px);
  padding: 8px 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  ${font({ size: "16", lineHeight: "24", fontWeight: "400" })}
  color: ${({ theme }) => theme.color.black};

  &:focus-within ~ ${Placeholder} {
    top: -23px;
    left: 20px;

    ${font({ size: "12", lineHeight: "20", fontWeight: "400" })}
    color: ${({ theme }) => theme.color.grey};
  }

  ${(props) =>
    props.hasInputError &&
    css`
      border-color: ${({ theme }) => theme.color.red};
    `}

  ${(props) =>
    props.hasInputIcon &&
    css`
      box-sizing: border-box;
      width: 100%;
      padding-right: 50px;
    `}
`;

const ErrorMessage = styled.span`
  ${font({ size: "13", lineHeight: "18", fontWeight: "400" })}
  color: ${({ theme }) => theme.color.orange};
  position: absolute;
  bottom: -20px;
`;

export const Styled = { Container, Label, Input, Placeholder, ErrorMessage };
