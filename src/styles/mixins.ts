import { css } from 'styled-components';

import { FontType } from './interfaces';

export const width100 = css`
  width: 100%;
`;

export const height100 = css`
  height: 100%;
`;

export const flexSpaceBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const flexStartBetween = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexVerticalCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const flexColumnCenterHorizontal = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const flexAlignCenter = css`
  display: flex;
  align-items: center;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const flexWrapCenter = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const widthHeight100 = css`
  ${width100};
  ${height100};
`;

export const absolutePseudoEl = css`
  content: '';
  position: absolute;
`;

export const font = ({ size, lineHeight, fontWeight }: FontType) => `
  font-size: ${size || '16'}px;
  line-height: ${lineHeight || '0'}px;
  font-weight: ${fontWeight || '400'};
`;

export const box = (size: number) => `
  width: ${size}px;
  height: ${size}px;
`;

export const fullscreenFixed = css`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const transformCenter = css`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const flexRowWrap = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const transformXCenter = css`
  left: 50%;
  transform: translateX(-50%);
`;

export const container1400 = css`
  width: min(1400px, 100% - 48px);
  margin-inline: auto;
`;

export const minMaxWidth = (size: number) => `
  min-width: ${size}px;
  max-width: ${size}px;
`;

export const minMaxHeight = (size: number) => `
  min-height: ${size}px;
  max-height: ${size}px;
`;

export const minMaxWidthHeight = (width: number, height?: number) => `
  ${minMaxWidth(width)};
  ${minMaxHeight(height ? height : width)};
`;
