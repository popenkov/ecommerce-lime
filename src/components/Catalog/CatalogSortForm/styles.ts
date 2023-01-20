import { box, flexAlignCenter, font } from "@src/styles/mixins";

import styled, { css } from "styled-components";

const Form = styled.form`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const SelectsContainer = styled.div`
  ${flexAlignCenter};
  gap: 12px;
`;

const SelectItem = styled.div`
  &:first-child {
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}) {
      display: none;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-grow: 1;
  }
`;

export const Styled = {
  Form,
  SelectsContainer,
  SelectItem,
};
