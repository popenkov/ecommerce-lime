import React, { FC } from 'react';

import { ReactComponent as Shevron } from '@src/assets/icons/shevron-left.svg';
import { Styled } from './styles';

type NavigationButtonsProps = {
  prevRef: React.RefObject<HTMLButtonElement>;
  nextRef: React.RefObject<HTMLButtonElement>;
};

export const NavigationButtons: FC<NavigationButtonsProps> = ({
  prevRef,
  nextRef,
}) => {
  return (
    <Styled.NavigationContainer>
      <Styled.NavigationBtnOverlay ref={prevRef}>
        <Styled.NavigationButtonLeft>
          <Shevron />
        </Styled.NavigationButtonLeft>
      </Styled.NavigationBtnOverlay>
      <Styled.NavigationBtnOverlay ref={nextRef}>
        <Styled.NavigationButtonRight>
          <Shevron />
        </Styled.NavigationButtonRight>
      </Styled.NavigationBtnOverlay>
    </Styled.NavigationContainer>
  );
};
