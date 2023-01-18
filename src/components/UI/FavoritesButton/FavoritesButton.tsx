import { FC, useState } from "react";

import { ReactComponent as FavoritesIcon } from "@src/assets/icons/favorites.svg";
import { Styled } from "./styles";

type FavoritesButtonProps = {
  isFavorite: boolean;
};

export const FavoritesButton: FC<FavoritesButtonProps> = ({ isFavorite }) => {
  const [isItemFavorite, setIsItemFavorite] = useState(isFavorite);

  const handleFavoriteClick = () => {
    setIsItemFavorite((prev) => !prev);
  };

  return (
    <Styled.FavoritesButton onClick={handleFavoriteClick} isActive={isItemFavorite}>
      <FavoritesIcon />
    </Styled.FavoritesButton>
  );
};
