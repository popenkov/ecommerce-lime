import { FC } from "react";

import { ReactComponent as ArrowIcon } from "@src/assets/icons/arrow-right.svg";
import { Ingredient } from "@src/components/UI/Ingredient";
import { Tag } from "@src/components/UI/Tag";
import { ChiefReceiptItemType } from "@src/types/commonTypes";

import { Styled } from "./styles";

type isSmallProps = {
  isSmall?: boolean;
};
export const Receipt: FC<ChiefReceiptItemType & isSmallProps> = ({
  title,
  img,
  tags,
  ingredients,
  isSmall,
  button,
}) => {
  return (
    <Styled.Receipt isSmall={isSmall}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.ImgContainer>
        <Styled.Img src={img} alt={title} />
        <Styled.TagsContainer>
          {tags.map((tag) => {
            return <Tag {...tag} key={tag.id} />;
          })}
        </Styled.TagsContainer>
        {typeof button?.href === "string" && (
          <Styled.ShowReceiptLink to={button?.href}>
            <Styled.ShowReceiptText>
              Смотреть рецепт
              <ArrowIcon />
            </Styled.ShowReceiptText>
          </Styled.ShowReceiptLink>
        )}
      </Styled.ImgContainer>
      {ingredients && (
        <Styled.IngredientsContainer>
          <Styled.IngredientsItems>
            {ingredients.map((item) => {
              return <Ingredient {...item} key={item.id} />;
            })}
          </Styled.IngredientsItems>
          <Styled.IngredientsButton>Купить ингредиенты</Styled.IngredientsButton>
        </Styled.IngredientsContainer>
      )}
    </Styled.Receipt>
  );
};
