import { box, flexCenter, font } from '@src/styles/mixins';
import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  position: relative;
  margin-right: 15px;
`;

const Input = styled.input`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.color.greyLightBg};
  padding: 14px 50px 14px 23px;
  border: none;
  border-radius: 10px;

  &:placeholder {
    ${font({ size: '14', lineHeight: '17', fontWeight: '700' })};
    color: ${({ theme }) => theme.color.greyLightBg};
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Styled = { Container, Input, IconContainer };
