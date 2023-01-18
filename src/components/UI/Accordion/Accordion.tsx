import React, { FC, useState } from "react";

import { Styled } from "./styles";

export const Accordion: FC<any> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHeaderClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Styled.Accordion>
      <Styled.Header onClick={handleHeaderClick}>{title}</Styled.Header>
      <Styled.Body isOpen={isOpen}>{children}</Styled.Body>
    </Styled.Accordion>
  );
};
