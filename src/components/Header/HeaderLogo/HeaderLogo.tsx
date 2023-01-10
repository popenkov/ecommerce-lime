import { FC } from "react";

import { ReactComponent as Logo } from "../../../assets/images/header-logo.svg";
import { Styled } from "./styles";

export const HeaderLogo: FC = () => {
  return (
    <Styled.Logo>
      <Logo />
    </Styled.Logo>
  );
};
