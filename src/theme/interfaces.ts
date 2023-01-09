export type Color = {
  background: string;
  white: string;
  black: string;
  greyBg: string;
  greyBorder: string;
  greyLightBg: string;
  green: string;
  orange: string;
  yellow: string;
};

export type Breakpoints = {
  xSmall: string;
  small: string;
  medium: string;
  tablet: string;
  large: string;
};

export interface Theme {
  color: Color;
  breakpoints: Breakpoints;
}
