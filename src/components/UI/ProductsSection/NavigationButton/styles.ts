import styled, { css } from 'styled-components';

import { box, fullscreenFixed } from '@src/styles/mixins';

const NavigationContainer = styled.div`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;

    z-index: 1;
    display: flex;
  }
`;

const NavigationBtnOverlay = styled.button`
  width: 50%;
  height: 100%;
`;

const buttonCommon = css`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    cursor: pointer;
    width: 27px;
    height: 72px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.white};
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    z-index: 1;
    top: 50%;

    display: flex;

    transform: translateY(-50%);
  }
`;

const NavigationButtonLeft = styled.div`
  ${buttonCommon};
  left: 0px;
`;

const NavigationButtonRight = styled.div`
  ${buttonCommon};
  right: 0px;

  svg {
    transform: rotate(180deg);
  }
`;

export const Styled = {
  NavigationContainer,
  NavigationBtnOverlay,
  NavigationButtonLeft,
  NavigationButtonRight,
};
