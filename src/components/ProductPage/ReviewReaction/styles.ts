import { flexAlignCenter, font } from "@src/styles/mixins";
import styled from "styled-components";

const Reaction = styled.div`
  ${flexAlignCenter}
`;

const Text = styled.span`
  margin-right: 13px;
  ${font({ size: "8", lineHeight: "18", fontWeight: "400" })};
  color: ${({ theme }) => theme.color.black};
  opacity: 0.5;
`;

const ReactionButton = styled.button`
  ${flexAlignCenter}
  & svg {
    margin-right: 5px;
  }
`;

const Value = styled.span`
  ${font({ size: "8", lineHeight: "18", fontWeight: "700" })};
  color: ${({ theme }) => theme.color.green};
`;

export const Styled = {
  Reaction,
  Text,
  ReactionButton,
  Value,
};
