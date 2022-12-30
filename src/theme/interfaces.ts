export type Color = {
  red: string;
  redHover: string;
  redBtnHover: string;
  pink: string;
  black: string;
  blackHover: string;
  blackBtnHover: string;
  grey: string;
  greyHover: string;
  greyBtnHover: string;
  lightGrey: string;
  greyBorder: string;
  lightGreyBorder: string;
  greyBg: string;
  greyBgHover: string;
  greyBgLogo: string;
  greyBold: string;
  greyHeader: string;
  greyPale: string;
  white: string;
  bgColor: string;
  bgCover: string;
  bgPopup: string;
  whiteOpacity50: string;
  greyBorderOpacity50: string;
  blackOpacity40: string;
  green: string;
  greenSuccess: string;
};

export type Breakpoints = {
  xSmall: string;
  small: string;
  medium: string;
  large: string;
  tabletLarge: string;
  tabletXLarge: string;
  xlarge: string;
  xxlarge: string;
};

export interface Theme {
  color: Color;
  breakpoints: Breakpoints;
}
