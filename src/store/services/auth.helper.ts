export const saveToStorage = (name: string, data: string) => {
  localStorage.setItem(name, JSON.stringify(data));
};
