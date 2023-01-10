import { useActions } from "@src/hooks/useActions";
import { useAppSelector } from "@src/hooks/useAppSelector";
import { FC } from "react";

import { ReactComponent as CatalogIcon } from "../../../../assets/icons/catalog.svg";
import { Styled } from "./styles";

export const CatalogButton: FC = () => {
  const { isOpen } = useAppSelector((state) => state.catalogMenu);
  const { toggleCatalogMenu } = useActions();
  const handleCatalogClick = () => {
    toggleCatalogMenu();
  };
  return (
    <Styled.Button onClick={handleCatalogClick}>
      <CatalogIcon />
      {!isOpen ? <Styled.MobileLine /> : <Styled.CloseButton />}
      <Styled.Text> Каталог</Styled.Text>
    </Styled.Button>
  );
};
