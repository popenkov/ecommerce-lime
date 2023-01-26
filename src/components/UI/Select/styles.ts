import styled from "styled-components";

import { font } from "@src/styles/mixins";

const SelectContainer = styled.div`
  width: 100%;
  & .custom-select {
    &__control {
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      min-height: unset;
    }

    &__value-container {
      padding: 3px 10px;
    }

    &__input-container {
      padding: 0;
      margin: 0;
    }

    &__single-value {
      ${font({ size: "12", lineHeight: "15", fontWeight: "700" })};
      color: ${({ theme }) => theme.color.black};
    }

    &__indicator {
      padding: 5px;
    }

    &__indicator-separator {
      display: none;
    }

    &__dropdown-indicator {
      & svg {
        fill: ${({ theme }) => theme.color.green};
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const ErrorMessage = styled.span`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const Styled = {
  SelectContainer,
  ErrorMessage,
};
