import { EnergyType, ItemType } from "@src/types/commonTypes";
import { ReceiptIngredientType } from "@src/types/ReceiptDetailedTypes";

export const calculateEnergie = (ingredients: ReceiptIngredientType[], portionValue?: number) => {
  const energyArr: EnergyType[][] = [];

  ingredients.forEach((obj) => {
    const itemAmount = portionValue ? obj.amount.value * portionValue : obj.amount.value;
    for (let i = 0; i < itemAmount; i++) {
      energyArr.push(obj.energy);
    }
  });

  const proteins = energyArr.reduce(
    (acc: number, obj: any) =>
      acc +
      obj.find((item: EnergyType) => {
        return item.id === "proteins";
      }).value,
    0
  );

  const fats = energyArr.reduce(
    (acc: number, obj: any) =>
      acc +
      obj.find((item: EnergyType) => {
        return item.id === "fats";
      }).value,
    0
  );

  const carbohydrate = energyArr.reduce(
    (acc: number, obj: any) =>
      acc +
      obj.find((item: EnergyType) => {
        return item.id === "carbohydrate";
      }).value,

    0
  );
  const calories = energyArr.reduce(
    (acc: number, obj: any) =>
      acc +
      obj.find((item: EnergyType) => {
        return item.id === "calories";
      }).value,

    0
  );

  return [
    { id: "proteins", name: "Белки", value: proteins },
    { id: "fats", name: "Жиры", value: fats },
    { id: "carbohydrate", name: "Углеводы", value: carbohydrate },
    { id: "calories", name: "Калории", value: calories },
  ];
};

export const calculateIngredientsPrice = (ingredients: ReceiptIngredientType[], portionValue?: number) => {
  const priceArr: number[] = [];

  ingredients.forEach((obj) => {
    const itemAmount = portionValue ? obj.amount.value * portionValue : obj.amount.value;
    for (let i = 0; i < itemAmount; i++) {
      const priceValue = Number(obj.price);
      priceArr.push(priceValue);
    }
  });

  const price = priceArr.reduce((acc: number, obj: any) => acc + obj, 0);

  return price;
};
