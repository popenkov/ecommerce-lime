import { ReactComponent as ClockIcon } from "@src/assets/icons/clock.svg";
import { ReactComponent as PortionIcon } from "@src/assets/icons/portion.svg";
import receiptMain from "@src/assets/images/receiptDetailed/slider-big.jpg";
import receiptThumb from "@src/assets/images/receiptDetailed/slider-thumb-1.jpg";
import receiptFirst from "@src/assets/images/receipts/barbeque.jpg";
import ingredientFirst from "@src/assets/images/receipts/ingredientFirst.jpg";
import ingredientSecond from "@src/assets/images/receipts/ingredientSecond.jpg";
import ingredientThird from "@src/assets/images/receipts/ingredientThird.jpg";
import { ReceiptDetailedType } from "@src/types/ReceiptDetailedTypes";

export const ReceiptDetailedData: ReceiptDetailedType = {
  sliderImages: {
    main: [
      {
        id: "1",
        text: "test",
        img: receiptMain,
      },
      {
        id: "2",
        text: "test",
        img: receiptMain,
      },
      {
        id: "3",
        text: "test",
        img: receiptMain,
      },
      {
        id: "4",
        text: "test",
        img: receiptMain,
      },
      {
        id: "5",
        text: "test",
        img: receiptMain,
      },
      {
        id: "6",
        text: "test",
        img: receiptMain,
      },
    ],
    thumb: [
      {
        id: "1",
        text: "test",
        img: receiptThumb,
      },
      {
        id: "2",
        text: "test",
        img: receiptThumb,
      },
      {
        id: "3",
        text: "test",
        img: receiptThumb,
      },
      {
        id: "4",
        text: "test",
        img: receiptThumb,
      },
      {
        id: "5",
        text: "test",
        img: receiptThumb,
      },
      {
        id: "6",
        text: "test",
        img: receiptThumb,
      },
    ],
    isFavorite: true,
  },
  videoLink: {
    id: "1",
    href: "#",
    text: "Смотрите видео приготовления",
  },
  description: {
    title: "Рецепт самого сочного и вкусного бургера",
    rating: { value: "4.2", amount: "123231" },
    tags: [{ id: "1", icon: ClockIcon, text: "15 минут" }],
    portions: [
      {
        value: "1",
        label: "1 порция",
      },
      {
        value: "2",
        label: "2 порция",
      },
      {
        value: "3",
        label: "3 порция",
      },
    ],
    ingredients: [
      {
        id: "1",
        text: "Булочка для бургеров",
        amount: { value: 1, unit: "шт" },
        price: "20",
        img: ingredientFirst,
        energy: [
          {
            id: "proteins",
            name: "Белки",
            value: 12,
          },
          {
            id: "fats",
            name: "Жиры",
            value: 33,
          },
          {
            id: "carbohydrate",
            name: "Углеводы",
            value: 44,
          },
          {
            id: "calories",
            name: "Калории",
            value: 200,
          },
        ],
      },
      {
        id: "2",
        text: "Авокадо",
        amount: { value: 4, unit: "шт" },
        price: "20",
        img: ingredientFirst,
        energy: [
          {
            id: "proteins",
            name: "Белки",
            value: 12,
          },
          {
            id: "fats",
            name: "Жиры",
            value: 33,
          },
          {
            id: "carbohydrate",
            name: "Углеводы",
            value: 44,
          },
          {
            id: "calories",
            name: "Калории",
            value: 200,
          },
        ],
      },
      {
        id: "3",
        text: "Томат",
        amount: { value: 2, unit: "шт" },
        price: "20",
        img: ingredientFirst,
        energy: [
          {
            id: "proteins",
            name: "Белки",
            value: 12,
          },
          {
            id: "fats",
            name: "Жиры",
            value: 33,
          },
          {
            id: "carbohydrate",
            name: "Углеводы",
            value: 44,
          },
          {
            id: "calories",
            name: "Калории",
            value: 200,
          },
        ],
      },
      {
        id: "4",
        text: "Огурец",
        amount: { value: 1, unit: "шт" },
        price: "20",
        img: ingredientFirst,
        energy: [
          {
            id: "proteins",
            name: "Белки",
            value: 12,
          },
          {
            id: "fats",
            name: "Жиры",
            value: 33,
          },
          {
            id: "carbohydrate",
            name: "Углеводы",
            value: 44,
          },
          {
            id: "calories",
            name: "Калории",
            value: 200,
          },
        ],
      },
      {
        id: "5",
        text: "Салат зеленый",
        amount: { value: 4, unit: "шт" },
        price: "20",
        img: ingredientFirst,
        energy: [
          {
            id: "proteins",
            name: "Белки",
            value: 12,
          },
          {
            id: "fats",
            name: "Жиры",
            value: 33,
          },
          {
            id: "carbohydrate",
            name: "Углеводы",
            value: 44,
          },
          {
            id: "calories",
            name: "Калории",
            value: 200,
          },
        ],
      },
      {
        id: "6",
        text: " Рис черный",
        amount: { value: 2, unit: "шт" },
        price: "20",
        img: ingredientFirst,
        energy: [
          {
            id: "proteins",
            name: "Белки",
            value: 12,
          },
          {
            id: "fats",
            name: "Жиры",
            value: 33,
          },
          {
            id: "carbohydrate",
            name: "Углеводы",
            value: 44,
          },
          {
            id: "calories",
            name: "Калории",
            value: 200,
          },
        ],
      },
      {
        id: "7",
        text: "Майонез постный",
        amount: { value: 1, unit: "шт" },
        price: "20",
        img: ingredientFirst,
        energy: [
          {
            id: "proteins",
            name: "Белки",
            value: 12,
          },
          {
            id: "fats",
            name: "Жиры",
            value: 33,
          },
          {
            id: "carbohydrate",
            name: "Углеводы",
            value: 44,
          },
          {
            id: "calories",
            name: "Калории",
            value: 200,
          },
        ],
      },
    ],
  },
  receiptSteps: {
    title: "Рецепт",
    color: "#A1D214",
    text: "Описательная информация о рецепте для сео, описательная информация о рецепте для сео.",
    rating: { value: "4.2", amount: "123231" },
    steps: [
      {
        id: "1",
        img: receiptMain,
        title: "Шаг 1",
        text: "Среди букмекерских контор этот чемпионат набирает самое большое количество ставок, после футбола. JohnnyBet предлагает надежные букмекерские конторы, в которых можно делать ставки на это событие безопасно.",
      },
      {
        id: "2",
        img: receiptMain,
        title: "Шаг 2",
        text: "Среди букмекерских контор этот чемпионат набирает самое большое количество ставок, после футбола. JohnnyBet предлагает надежные букмекерские конторы, в которых можно делать ставки на это событие безопасно.",
      },
      {
        id: "3",
        img: receiptMain,
        title: "Шаг 3",
        text: "Среди букмекерских контор этот чемпионат набирает самое большое количество ставок, после футбола. JohnnyBet предлагает надежные букмекерские конторы, в которых можно делать ставки на это событие безопасно.",
      },
      {
        id: "4",
        img: receiptMain,
        title: "Шаг 4",
        text: "Среди букмекерских контор этот чемпионат набирает самое большое количество ставок, после футбола. JohnnyBet предлагает надежные букмекерские конторы, в которых можно делать ставки на это событие безопасно.",
      },
    ],
  },
  reviews: {
    title: "Отзывы покупателей",
    color: "#A1D214",
    subtitle: { value: 3254, text: "отзывов" },
    filter: [
      {
        id: "1",
        text: "Сначала новые",
        isActive: true,
      },
      { id: "2", text: "По популярности", isActive: false },
    ],

    reviews: [
      {
        id: "1",
        name: "Елена",
        rating: {
          value: "4",
          amount: "123321",
        },
        date: "18 июля 2020 г.",
        text: "Замечательный продукт! Каждый день беру его и едим всей семьей! Мука что надо, булочки пышные!",
        useFullReactions: "2",
      },
      {
        id: "2",
        name: "Елена",
        rating: {
          value: "4",
          amount: "123321",
        },
        date: "18 июля 2020 г.",
        text: "Замечательный продукт! Каждый день беру его и едим всей семьей! Мука что надо, булочки пышные!",
        useFullReactions: "2",
      },
    ],
  },
  anotherReceipts: {
    title: "Похожие рецепты",
    subtitle: "",
    button: {
      text: "Показать все",
      href: "/receipts",
    },
    items: [
      {
        id: "1",
        title: "Курочка BARBEQUE",
        img: receiptFirst,
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
};
