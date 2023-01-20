import styled, { css } from "styled-components";

import { box, flexAlignCenter, font } from "@src/styles/mixins";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const Slider = styled.div`
  position: relative;
  width: 100%;
  max-width: 172px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const Track = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 5px;

  background-color: ${({ theme }) => theme.color.greyTrack};
  width: 100%;
  z-index: 1;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const Range = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 5px;

  background-color: ${({ theme }) => theme.color.green};
  z-index: 2;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const InputsContainer = styled.div`
  ${flexAlignCenter};
  justify-content: space-between;
  gap: 6px;
  margin-bottom: 20px;
`;

const LeftValue = styled.input`
  color: #dee2e6;
  font-size: 12px;

  left: 6px;
  box-sizing: border-box;
  width: 45%;
  padding: 6px 8px;
  height: 29px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const RightValue = styled.input`
  color: #dee2e6;
  font-size: 12px;

  right: -4px;

  box-sizing: border-box;
  width: 45%;
  height: 29px;
  padding: 6px 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const InputsDivider = styled.span`
  display: inline-block;
  width: 12px;
  height: 1px;

  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  background-color: #5f5f5f;
`;

const RangeSliderContainer = styled.div`
  position: relative;
  ${flexAlignCenter};
`;

const ThumbsContainer = styled.div`
  position: relative;
  bottom: -24px;
  ${flexAlignCenter};
`;

const ThumbLeft = styled.input`
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  pointer-events: none;
  position: absolute;
  height: 0;
  width: 172px;
  outline: none;

  z-index: 3;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    background-color: ${({ theme }) => theme.color.green};
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
  width: 172px;
  outline: none;

  z-index: 4;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    background-color: ${({ theme }) => theme.color.green};
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
  RangeSliderContainer,
  Slider,
  Track,
  Range,
  InputsContainer,
  LeftValue,
  RightValue,
  ThumbsContainer,
  ThumbLeft,
  ThumbRight,
  InputsDivider,
};
