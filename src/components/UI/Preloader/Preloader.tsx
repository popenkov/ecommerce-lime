import { useEffect, useRef } from "react";

import { ReactComponent as HeaderLogo } from "@src/assets/images/loader-logo.svg";

import { Styled } from "./styles";
const Preloader = () => {
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);

  let count = 1;
  const countFinishValue = 100;
  let loaderId: NodeJS.Timer;

  const loadHandler = () => {
    if (count <= countFinishValue) {
      if (logoRef?.current) {
        logoRef.current.style.opacity = `${0.01 * count}`;
      }
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
      <Styled.LogoContainer ref={logoRef}>
        <HeaderLogo />
      </Styled.LogoContainer>
    </Styled.Preloader>
  );
};

export default Preloader;
