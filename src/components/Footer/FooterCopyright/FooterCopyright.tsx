import { CopyrightType } from "@src/types/FooterTypes";
import { FC } from "react";

import { ReactComponent as Logo } from "../../../assets/images/footer-logo.svg";
import { Styled } from "./styles";

type FooterCopyrightProps = {
  data: CopyrightType;
};
export const FooterCopyright: FC<FooterCopyrightProps> = ({ data }) => {
  const { years, rights, agreement } = data;
  return (
    <Styled.Container>
      <Styled.LogoContainer>
        <Logo />
      </Styled.LogoContainer>

      <Styled.Text>{years}</Styled.Text>
      <Styled.Text>{rights}</Styled.Text>
      <Styled.Link href={agreement.href}>{agreement.text}</Styled.Link>
    </Styled.Container>
  );
};
