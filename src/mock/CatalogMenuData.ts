import { FunctionComponent, SVGProps } from "react";

import { ReactComponent as ChiefIcon } from "@src/assets/icons/menu/chef.svg";
import { ReactComponent as FlourIcon } from "@src/assets/icons/menu/flour.svg";
import { ReactComponent as GroceriesIcon } from "@src/assets/icons/menu/groceries.svg";

export const CatalogData = [
  {
    id: "1",
    icon: GroceriesIcon,
    name: "Акционные товары",
    children: [],
  },
  {
    id: "2",
    icon: ChiefIcon,
    name: "Собственное производство ",
    children: [],
  },
  {
    id: "3",
    icon: FlourIcon,
    name: "Бакалея",
    children: [],
  },
];
