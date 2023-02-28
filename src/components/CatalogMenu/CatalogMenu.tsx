import { FC, memo, useEffect, useState } from "react";

import { useAppSelector } from "@src/hooks/useAppSelector";
import { useGetCatalogMenuDataQuery } from "@src/store/services";

import { CatalogItem } from "./CatalogItem";
import { Styled } from "./styles";

export const CatalogMenu: FC = memo(() => {
  const { data } = useGetCatalogMenuDataQuery();
  const { isOpen, isSubcategoryShown } = useAppSelector((state) => state.catalogMenu);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  useEffect(() => {
    if (!isSubcategoryShown) {
      handleActiveMenuDisable();
    }
  }, [isSubcategoryShown]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleCatalogItemClick = (id: number) => {
    setActiveMenu(id);
  };

  const handleActiveMenuDisable = () => {
    setActiveMenu(null);
  };

  const showCatalogMenu = data && isOpen;

  return (
    <>
      {showCatalogMenu && (
        <Styled.CatalogBackground>
          <Styled.Catalog isSubcategoryShown={isSubcategoryShown}>
            <Styled.CatalogTitle isSubcategoryShown={isSubcategoryShown}>Выберите категорию</Styled.CatalogTitle>
            <Styled.CatalogList>
              {data.map((item, index) => {
                const showDetailed = activeMenu === index;
                return (
                  <CatalogItem
                    {...item}
                    key={item.id}
                    showDetailed={showDetailed}
                    onClick={() => handleCatalogItemClick(index)}
                  />
                );
              })}
            </Styled.CatalogList>
          </Styled.Catalog>
        </Styled.CatalogBackground>
      )}
    </>
  );
});

CatalogMenu.displayName = "CatalogMenu";
