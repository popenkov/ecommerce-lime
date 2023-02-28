import { memo, useEffect, useRef, useState } from "react";

import { ReactComponent as HeaderLogo } from "@src/assets/images/loader-logo.svg";

import { Styled } from "./styles";
const Preloader = () => {
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const [opacity, setOpacity] = useState(0);

  let count = 1;
  const countFinishValue = 100;
  let loaderId: NodeJS.Timer;

  const loadHandler = () => {
    if (count <= countFinishValue) {
      setOpacity((prev) => (prev = 0.01 * count));
      count++;
    } else {
      if (loaderId && loaderRef.current) {
        clearInterval(loaderId);
        loaderRef.current.style.opacity = "0";
        loaderRef.current.style.visibility = "hidden";
      }
    }
  };

  useEffect(() => {
    if (loaderRef.current) {
      loaderId = setInterval(loadHandler, 45);
    }
  }, [loaderRef]);

  return (
    <Styled.Preloader ref={loaderRef}>
      <Styled.LogoContainer opacity={opacity}>
        <HeaderLogo />
      </Styled.LogoContainer>
    </Styled.Preloader>
  );
};

export default memo(Preloader);

Preloader.displayName = "Preloader";
