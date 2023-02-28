import { FC, memo } from "react";

import { ReactComponent as PlayIcon } from "@src/assets/icons/play-icon.svg";
import { LinkType } from "@src/types/commonTypes";

import { Styled } from "./styles";

type VideoButtonProps = Omit<LinkType, "id">;
export const VideoButton: FC<VideoButtonProps> = memo(({ text, href }) => {
  return (
    <Styled.Button href={href}>
      <Styled.Text>{text}</Styled.Text>
      <Styled.IconContainer>
        <PlayIcon />
      </Styled.IconContainer>
    </Styled.Button>
  );
});

VideoButton.displayName = "VideoButton";
