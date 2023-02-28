import React, { FC, memo } from "react";

import { Styled } from "./styles";

type StarProps = {
  isActive: boolean;
};

export const Star: FC<StarProps> = memo(({ isActive }) => {
  const starColor = isActive ? "#FFC107" : "rgba(51, 51, 51, .3)";
  return (
    <Styled.Star>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.6815 4.29201L7.99255 3.72851L6.33905 0.206512C6.21555 -0.0564879 5.78405 -0.0564879 5.66055 0.206512L4.00755 3.72851L0.318548 4.29201C0.0155479 4.33851 -0.105452 4.70701 0.107048 4.92451L2.78705 7.67151L2.15355 11.555C2.10305 11.8635 2.43255 12.095 2.70505 11.9435L6.00005 10.1225L9.29505 11.944C9.56505 12.094 9.89755 11.867 9.84655 11.5555L9.21305 7.67201L11.893 4.92501C12.1055 4.70701 11.984 4.33851 11.6815 4.29201Z"
          fill={starColor}
        />
      </svg>
    </Styled.Star>
  );
});

Star.displayName = "Star";
