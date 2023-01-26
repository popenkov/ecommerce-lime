import { FC } from "react";

import { ReactComponent as Shevron } from "@src/assets/icons/shevron-left.svg";
import { DetailedCatalogMenu } from "@src/components/DetailedCatalogMenu";
import { useActions } from "@src/hooks/useActions";
import { useAppSelector } from "@src/hooks/useAppSelector";
import { CatalogItemType } from "@src/types/CatalogMenuTypes";
import { ICONS } from "@src/utils/IconsMap";

import { Styled } from "./styles";

type CatalogItem = {
  onClick: () => void;
  showDetailed: boolean;
};
type CatalogItemProps = CatalogItem & CatalogItemType;

const renderIcon = (Icon: any) => {
  return <Icon />;
};

export const CatalogItem: FC<CatalogItemProps> = ({ icon, name, children, onClick, showDetailed }) => {
  const key = icon as keyof typeof ICONS;
  const Icon = typeof icon === "string" ? ICONS[key] : null;

  const { showSubcategory, hideSubcategory } = useActions();
  const { isSubcategoryShown } = useAppSelector((state) => state.catalogMenu);

  const handleMenuItemClick = () => {
    onClick();
    children ? showSubcategory() : hideSubcategory();
  };

  const isActive = showDetailed;
  const showDetailedCatalog = children && showDetailed;

  return (
    <>
      <Styled.CatalogItem onClick={handleMenuItemClick} isActive={isActive}>
        <Styled.CatalogIcon>{renderIcon(Icon)}</Styled.CatalogIcon>
        <Styled.CatalogName isActive={isSubcategoryShown}>{name}</Styled.CatalogName>
        {children && (
          <Styled.ShevronIcon isActive={isSubcategoryShown}>
            <Shevron />
          </Styled.ShevronIcon>
        )}
      </Styled.CatalogItem>
      {showDetailedCatalog && <DetailedCatalogMenu {...children} />}
    </>
  );
};
