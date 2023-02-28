import { FC, memo } from "react";

import { ReactComponent as LoaderLogo } from "@src/assets/icons/loader-icon.svg";

import { Styled } from "./styles";
export const Loader: FC = memo(() => {
  return (
    <Styled.Loader>
      <Styled.LogoContainer>
        <LoaderLogo />
        <Styled.FillContainer />
      </Styled.LogoContainer>
    </Styled.Loader>
  );
});

Loader.displayName = "Loader";
