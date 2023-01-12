import { FC } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../../assets/images/header-logo.svg";
import { Styled } from "./styles";

export const HeaderLogo: FC = () => {
  return (
    <Link to="/">
      <Styled.Logo>
        <Logo />
      </Styled.Logo>
    </Link>
  );
};
