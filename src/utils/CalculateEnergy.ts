import { EnergyType, ItemType } from "@src/types/commonTypes";

export const calculateEnergie = (newItems: ItemType[]) => {
  const energyArr: EnergyType[][] = [];

  newItems.forEach((obj) => {
    const itemAmount = obj.amount;
    for (let i = 0; i < itemAmount; i++) {
      energyArr.push(obj.energy);
    }
  });

  console.log(energyArr);

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

  return [
    { id: "proteins", name: "Б", value: proteins },
    { id: "fats", name: "Ж", value: fats },
    { id: "carbohydrate", name: "У", value: carbohydrate },
  ];
};
