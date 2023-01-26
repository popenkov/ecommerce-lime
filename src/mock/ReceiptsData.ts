import { ReactComponent as ClockIcon } from "@src/assets/icons/clock.svg";
import { ReactComponent as PortionIcon } from "@src/assets/icons/portion.svg";
import receiptFirst from "@src/assets/images/receipts/barbeque.jpg";
import ingredientFirst from "@src/assets/images/receipts/ingredientFirst.jpg";
import ingredientSecond from "@src/assets/images/receipts/ingredientSecond.jpg";
import ingredientThird from "@src/assets/images/receipts/ingredientThird.jpg";
import { ReceiptsType } from "@src/types/ReceiptTypes";

export const ReceiptsData: ReceiptsType = {
  title: "Рецепты",
  resultsAmount: 12876,
  resultWords: ["рецепт", "рецепта", "рецептов"],
  filters: [
    {
      id: "category",
      title: "Категория",
      items: [
        {
          value: "all",
          label: "Категория 1",
        },
        {
          value: "2",
          label: "Категория 2",
        },
        {
          value: "3",
          label: "Категория 3",
        },
      ],
    },
    {
      id: "kitchen",
      title: "Кухня",
      items: [
        {
          value: "all",
          label: "Кухня 1",
        },
        {
          value: "2",
          label: "Кухня 2",
        },
        {
          value: "3",
          label: "Кухня 3",
        },
      ],
    },
    {
      id: "time",
      title: "Время приготовления",
      items: [
        {
          value: "all",
          label: "Время 1",
        },
        {
          value: "2",
          label: "Время 2",
        },
        {
          value: "3",
          label: "Время 3",
        },
      ],
    },
    {
      id: "products",
      title: "Продукты",
      items: [
        {
          value: "all",
          label: "Продукты 1",
        },
        {
          value: "2",
          label: "Продукты 2",
        },
        {
          value: "3",
          label: "Продукты 3",
        },
      ],
    },
  ],
  mobileFilters: [
    {
      title: "Категории",
      type: "checkboxes",
      items: [
        {
          id: "1",
          text: "Категория 1",
          inputName: "category",
          inputValue: "category-1",
        },
        {
          id: "2",
          text: "Категория 2",
          inputName: "category",
          inputValue: "category-2",
        },
        {
          id: "3",
          text: "Категория 3",
          inputName: "category",
          inputValue: "category-3",
        },
      ],
    },

    {
      title: "Кухня",
      type: "checkboxes",
      items: [
        {
          id: "1",
          text: "Кухня 1",
          inputName: "products",
          inputValue: "products-1",
        },
        {
          id: "2",
          text: "Кухня 2",
          inputName: "products",
          inputValue: "products-2",
        },
        {
          id: "3",
          text: "Кухня 3",
          inputName: "products",
          inputValue: "products-3",
        },
      ],
    },
    {
      title: "Время приготовления",
      type: "checkboxes",
      items: [
        {
          id: "1",
          text: "Время 1",
          inputName: "products",
          inputValue: "products-1",
        },
        {
          id: "2",
          text: "Время 2",
          inputName: "products",
          inputValue: "products-2",
        },
        {
          id: "3",
          text: "Время 3",
          inputName: "products",
          inputValue: "products-3",
        },
      ],
    },
    {
      title: "Продукты",
      type: "checkboxes",
      items: [
        {
          id: "1",
          text: "Продукты 1",
          inputName: "products",
          inputValue: "products-1",
        },
        {
          id: "2",
          text: "Продукты 2",
          inputName: "products",
          inputValue: "products-2",
        },
        {
          id: "3",
          text: "Продукты 3",
          inputName: "products",
          inputValue: "products-3",
        },
      ],
    },
  ],
  receipts: [
    {
      title: "Салаты",
      color: "#A1D214",
      items: [
        {
          id: "1",
          title: "Курочка BARBEQUE",
          img: receiptFirst,
          button: { href: "/receipts/1", text: "Смотреть все" },
          tags: [
            { id: "1", icon: ClockIcon, text: "15 минут" },
            { id: "2", icon: PortionIcon, text: "4 порции" },
          ],
          ingredients: [
            {
              id: "1",
              text: "Колбаска",
              price: "5 руб",
              img: ingredientFirst,
            },
            {
              id: "2",
              text: "Маслины без косточки",
              price: "2,54 руб",
              img: ingredientSecond,
            },
            {
              id: "3",
              text: "Хлебушек",
              price: "1 руб",
              img: ingredientThird,
            },
          ],
        },
        {
          id: "2",
          title: "Курочка BARBEQUE",
          img: receiptFirst,
          button: { href: "/receipts/1", text: "Смотреть все" },
          tags: [
            { id: "1", icon: ClockIcon, text: "15 минут" },
            { id: "2", icon: PortionIcon, text: "4 порции" },
          ],
          ingredients: [
            {
              id: "1",
              text: "Колбаска",
              price: "5 руб",
              img: ingredientFirst,
            },
            {
              id: "2",
              text: "Маслины без косточки",
              price: "2,54 руб",
              img: ingredientSecond,
            },
            {
              id: "3",
              text: "Хлебушек",
              price: "1 руб",
              img: ingredientThird,
            },
          ],
        },
        {
          id: "3",
          title: "Курочка BARBEQUE",
          img: receiptFirst,
          button: { href: "/receipts/1", text: "Смотреть все" },
          tags: [
            { id: "1", icon: ClockIcon, text: "15 минут" },
            { id: "2", icon: PortionIcon, text: "4 порции" },
          ],
          ingredients: [
            {
              id: "1",
              text: "Колбаска",
              price: "5 руб",
              img: ingredientFirst,
            },
            {
              id: "2",
              text: "Маслины без косточки",
              price: "2,54 руб",
              img: ingredientSecond,
            },
            {
              id: "3",
              text: "Хлебушек",
              price: "1 руб",
              img: ingredientThird,
            },
          ],
        },
        {
          id: "4",
          title: "Курочка BARBEQUE",
          img: receiptFirst,
          button: { href: "/receipts/1", text: "Смотреть все" },
          tags: [
            { id: "1", icon: ClockIcon, text: "15 минут" },
            { id: "2", icon: PortionIcon, text: "4 порции" },
          ],
          ingredients: [
            {
              id: "1",
              text: "Колбаска",
              price: "5 руб",
              img: ingredientFirst,
            },
            {
              id: "2",
              text: "Маслины без косточки",
              price: "2,54 руб",
              img: ingredientSecond,
            },
            {
              id: "3",
              text: "Хлебушек",
              price: "1 руб",
              img: ingredientThird,
            },
          ],
        },
      ],
    },
    {
      title: "Горячие блюда",
      color: " linear-gradient(90deg, #FF5C00 0%, #FF9900 100%), #A1D214;",

      items: [
        {
          id: "1",
          title: "Курочка BARBEQUE",
          img: receiptFirst,
          button: { href: "/receipts/1", text: "Смотреть все" },
          tags: [
            { id: "1", icon: ClockIcon, text: "15 минут" },
            { id: "2", icon: PortionIcon, text: "4 порции" },
          ],
          ingredients: [
            {
              id: "1",
              text: "Колбаска",
              price: "5 руб",
              img: ingredientFirst,
            },
            {
              id: "2",
              text: "Маслины без косточки",
              price: "2,54 руб",
              img: ingredientSecond,
            },
            {
              id: "3",
              text: "Хлебушек",
              price: "1 руб",
              img: ingredientThird,
            },
          ],
        },
        {
          id: "2",
          title: "Курочка BARBEQUE",
          img: receiptFirst,
          button: { href: "/receipts/1", text: "Смотреть все" },
          tags: [
            { id: "1", icon: ClockIcon, text: "15 минут" },
            { id: "2", icon: PortionIcon, text: "4 порции" },
          ],
          ingredients: [
            {
              id: "1",
              text: "Колбаска",
              price: "5 руб",
              img: ingredientFirst,
            },
            {
              id: "2",
              text: "Маслины без косточки",
              price: "2,54 руб",
              img: ingredientSecond,
            },
            {
              id: "3",
              text: "Хлебушек",
              price: "1 руб",
              img: ingredientThird,
            },
          ],
        },
        {
          id: "3",
          title: "Курочка BARBEQUE",
          img: receiptFirst,
          button: { href: "/receipts/1", text: "Смотреть все" },
          tags: [
            { id: "1", icon: ClockIcon, text: "15 минут" },
            { id: "2", icon: PortionIcon, text: "4 порции" },
          ],
          ingredients: [
            {
              id: "1",
              text: "Колбаска",
              price: "5 руб",
              img: ingredientFirst,
            },
            {
              id: "2",
              text: "Маслины без косточки",
              price: "2,54 руб",
              img: ingredientSecond,
            },
            {
              id: "3",
              text: "Хлебушек",
              price: "1 руб",
              img: ingredientThird,
            },
          ],
        },
        {
          id: "4",
          title: "Курочка BARBEQUE",
          img: receiptFirst,
          button: { href: "/receipts/1", text: "Смотреть все" },
          tags: [
            { id: "1", icon: ClockIcon, text: "15 минут" },
            { id: "2", icon: PortionIcon, text: "4 порции" },
          ],
          ingredients: [
            {
              id: "1",
              text: "Колбаска",
              price: "5 руб",
              img: ingredientFirst,
            },
            {
              id: "2",
              text: "Маслины без косточки",
              price: "2,54 руб",
              img: ingredientSecond,
            },
            {
              id: "3",
              text: "Хлебушек",
              price: "1 руб",
              img: ingredientThird,
            },
          ],
        },
      ],
    },
  ],
};
