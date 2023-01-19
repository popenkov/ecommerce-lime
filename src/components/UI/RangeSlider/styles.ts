import styled, { css } from "styled-components";

import { box, flexAlignCenter, font } from "@src/styles/mixins";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const Slider = styled.div`
  position: relative;
  width: 200px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Track = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 5px;

  background-color: #ced4da;
  width: 100%;
  z-index: 1;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const Range = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 5px;

  background-color: #9fe5e1;
  z-index: 2;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const InputsContainer = styled.div`
  position: absolute;
  ${flexAlignCenter};
`;

const LeftValue = styled.input`
  color: #dee2e6;
  font-size: 12px;
  margin-top: 20px;
  left: 6px;

  width: 40%;
  height: 29px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const RightValue = styled.input`
  color: #dee2e6;
  font-size: 12px;
  margin-top: 20px;
  right: -4px;

  width: 40%;
  height: 29px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const ThumbLeft = styled.input`
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  pointer-events: none;
  position: absolute;
  height: 0;
  width: 200px;
  outline: none;

  z-index: 3;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
`;
const ThumbRight = styled.input`
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  pointer-events: none;
  position: absolute;
  height: 0;
  width: 200px;
  outline: none;

  z-index: 4;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
`;

export const Styled = {
  Container,
  Slider,
  Track,
  Range,
  InputsContainer,
  LeftValue,
  RightValue,
  ThumbLeft,
  ThumbRight,
};
