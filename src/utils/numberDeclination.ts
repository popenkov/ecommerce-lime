export const numberDeclination = (amount: number, textForms: string[]) => {
  const ten = 10;
  const twenty = 20;
  const hundred = 100;

  const firstIndex = 0;
  const secondIndex = 1;
  const thirdIndex = 2;

  amount = Math.abs(amount) % hundred;

  const numberDividedByTen = amount % ten;
  const isBetweenEenDndTwenty = amount > ten && amount < twenty;
  const isBetweenOneAndFive = numberDividedByTen > 1 && numberDividedByTen < 5;

  if (isBetweenEenDndTwenty) return textForms[thirdIndex];
  if (isBetweenOneAndFive) return textForms[secondIndex];
  if (numberDividedByTen == 1) return textForms[firstIndex];

  return textForms[thirdIndex];
};
