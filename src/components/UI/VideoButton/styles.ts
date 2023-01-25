import { font } from "@src/styles/mixins";
import styled, { css } from "styled-components";

const Button = styled.div``;

const Text = styled.span`
  ${font({ size: "16", lineHeight: "20", fontWeight: "700" })}
  color: ${({ theme }) => theme.color.black};
`;

export const Styled = {
  Button,
  Text,
};
