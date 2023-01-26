import { FC } from "react";

import { LinkType } from "@src/types/commonTypes";
import { ICONS } from "@src/utils/IconsMap";

import { Styled } from "./styles";

type DownloadButtonType = Omit<LinkType, "id" | "href">;

const renderIcon = (Icon: any) => {
  return <Icon />;
};

export const DownloadButton: FC<DownloadButtonType> = ({ text, icon }) => {
  const key = icon as keyof typeof ICONS;
  const Icon = typeof icon === "string" ? (ICONS[key] as React.FunctionComponent<React.SVGProps<SVGSVGElement>>) : null;
  return (
    <Styled.Button>
      {icon && <Styled.IconContainer>{renderIcon(Icon)}</Styled.IconContainer>}
      <Styled.Text>{text}</Styled.Text>
    </Styled.Button>
  );
};
