import React, { FC, useState } from "react";
import ReactSelect, { SingleValue } from "react-select";

import { Rating } from "@src/components/UI";
import { AddToCardBtnNew } from "@src/components/UI/AddToCardBtnNew";
import { SelectOptionType } from "@src/components/UI/Select/select.interface";
import { Tag } from "@src/components/UI/Tag";
import { ReceiptDescriptionType } from "@src/types/ReceiptDetailedTypes";

import { IngredientRow } from "../IngredientRow";
import { Styled } from "./styles";
import { calculateEnergie, calculateIngredientsPrice } from "./utils";

type ReceiptDescriptionProps = {
  data: ReceiptDescriptionType;
};

export const ReceiptDescription: FC<ReceiptDescriptionProps> = ({ data }) => {
  const { title, rating, tags, portions, ingredients } = data;

  const [selectValue, setSelectValue] = useState<SelectOptionType | null>(portions[0]);
  const [areIngredientsAdded, setAreIngredientsAdded] = useState<boolean>(false);

  const handleSelectChange = (newValue: SingleValue<SelectOptionType>): void => {
    setSelectValue(newValue);
  };

  const portionValue = Number(selectValue?.value);
  const totalEnergy: any[] = calculateEnergie(ingredients, portionValue);
  const totalPrice = calculateIngredientsPrice(ingredients, portionValue);

  const handleIngredientsBuyClick = () => {
    console.log("ingredients are bought");
  };

  return (
    <Styled.MainDescription>
      <Styled.Description>
        <Styled.Title>{title}</Styled.Title>

        <Styled.TagsContainer>
          {tags.map((tag) => {
            return <Tag {...tag} key={tag.id} isLight />;
          })}
        </Styled.TagsContainer>
        <Styled.RatingContainer>
          <Rating data={rating} showStarsValue showReviewsValue={false} />
        </Styled.RatingContainer>

        <Styled.SelectContainer>
          <ReactSelect
            defaultValue={portions[0]}
            value={selectValue}
            classNamePrefix="portions-select"
            options={portions}
            onChange={handleSelectChange}
          />
        </Styled.SelectContainer>

        <Styled.EnergieContainer>
          {totalEnergy.length &&
            totalEnergy.map((item) => {
              return (
                <Styled.EnergyItem key={item.id}>
                  <Styled.EnergyName>{item.name}</Styled.EnergyName>
                  <Styled.EnergyValue>{item.value}</Styled.EnergyValue>
                </Styled.EnergyItem>
              );
            })}
        </Styled.EnergieContainer>

        <Styled.IngredientsContainer>
          {ingredients.map((item) => {
            return <IngredientRow {...item} key={item.id} />;
          })}
        </Styled.IngredientsContainer>

        <Styled.IngredientsCartContainer>
          <Styled.IngredientsPriceContainer>
            <Styled.IngredientsPriceTitle>?????????????????? ????????????????????????:</Styled.IngredientsPriceTitle>
            <Styled.IngredientsPriceValue>{totalPrice} ??????</Styled.IngredientsPriceValue>
          </Styled.IngredientsPriceContainer>
          <AddToCardBtnNew
            text="???????????? ??????????????????????"
            isAdded={areIngredientsAdded}
            onClick={handleIngredientsBuyClick}
            isLight
          />
        </Styled.IngredientsCartContainer>
      </Styled.Description>
    </Styled.MainDescription>
  );
};
