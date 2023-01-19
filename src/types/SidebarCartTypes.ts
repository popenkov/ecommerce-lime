export type SidebarItemsSection = {
  title: string;
  items: SidebarItem[];
};

export type SidebarItem = {
  id: string;
  img: string;
  amount: number;
  name: string;
  price: string;
  unit: string;
};
