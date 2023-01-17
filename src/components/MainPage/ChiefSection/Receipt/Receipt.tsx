import { Ingredient } from "@src/components/UI/Ingredient";
import { Tag } from "@src/components/UI/Tag";
import { ChiefReceiptItemType } from "@src/mock/MainPageData";
import { FC } from "react";
import { Styled } from "./styles";

type ReceiptProps = Omit<ChiefReceiptItemType, "id">;
type isSmallProps = {
  isSmall?: boolean;
};
export const Receipt: FC<ReceiptProps & isSmallProps> = ({ title, img, tags, ingredients, isSmall }) => {
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
