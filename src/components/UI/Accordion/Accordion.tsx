import { FC, useState } from "react";
import { ReactComponent as Shevron } from "@src/assets/icons/shevron-left.svg";
import { Styled } from "./styles";

export const Accordion: FC<any> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHeaderClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Styled.Accordion>
      <Styled.Header onClick={handleHeaderClick}>
        <Styled.Title>{title}</Styled.Title>
        <Styled.IconContainer isOpen={isOpen}>
          <Shevron />
        </Styled.IconContainer>
      </Styled.Header>
      <Styled.Body isOpen={isOpen}>{children}</Styled.Body>
    </Styled.Accordion>
  );
};
