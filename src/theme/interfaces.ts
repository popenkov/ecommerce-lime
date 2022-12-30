export type Color = {
  background: string;
  white: string;
  black: string;
  greyBg: string;
  greyLightBg: string;
  green: string;
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
