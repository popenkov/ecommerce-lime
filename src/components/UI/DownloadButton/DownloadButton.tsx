import { FC, FunctionComponent, SVGProps } from "react";

import { LinkType } from "@src/mock/FooterData";

import { Styled } from "./styles";
import { ICONS } from "@src/utils/IconsMap";

type DownloadButtonType = Omit<LinkType, "id">;

const renderIcon = (Icon: any) => {
  return <Icon />;
};

export const DownloadButton: FC<DownloadButtonType> = ({ text, href, icon }) => {
  const key = icon as keyof typeof ICONS;
  const Icon = typeof icon === "string" ? (ICONS[key] as React.FunctionComponent<React.SVGProps<SVGSVGElement>>) : null;
  return (
    <Styled.Button>
      {icon && <Styled.IconContainer>{renderIcon(Icon)}</Styled.IconContainer>}
      <Styled.Text>{text}</Styled.Text>
    </Styled.Button>
  );
};
