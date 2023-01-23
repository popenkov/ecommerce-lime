import { FC, useState } from "react";

import { ReactComponent as FavoritesIcon } from "@src/assets/icons/favorites.svg";

import { Styled } from "./styles";

type FavoritesButtonProps = {
  isFavorite: boolean;
  isSmall?: boolean;
};

export const FavoritesButton: FC<FavoritesButtonProps> = ({ isFavorite, isSmall }) => {
  const [isItemFavorite, setIsItemFavorite] = useState(isFavorite);

  const handleFavoriteClick = () => {
    setIsItemFavorite((prev) => !prev);
  };

  return (
    <Styled.FavoritesButton onClick={handleFavoriteClick} isActive={isItemFavorite} isSmall={isSmall}>
      <FavoritesIcon />
    </Styled.FavoritesButton>
  );
};
