import { useState } from "react";
import { ElectrotoolsContext } from "./context";
const fakeAccessories = [
  {
    id: "0",
    vendorCode: "129313812332",
    name: "Чехол 1",
    category: "Чехлы",
    price: 990,
    color: "Красный",
    country: "Китай",
    manufacturer: "China",
  },
  {
    id: "1",
    vendorCode: "129381234122",
    name: "Зарядное устройство 1",
    category: "Зарядные устройства",
    price: 2000,
    color: "Белый",
    country: "Китай",
    manufacturer: "China",
  },
  {
    id: "2",
    vendorCode: "129381235332",
    name: "Брелок 1",
    category: "Брелоки",
    price: 300,
    color: "Красный",
    country: "Китай",
    manufacturer: "China",
  },
  {
    id: "3",
    vendorCode: "129313812332",
    name: "Чехол 2",
    category: "Чехлы",
    price: 990,
    color: "Зеленый",
    country: "Китай",
    manufacturer: "China",
  },
  {
    id: "4",
    vendorCode: "129233812332",
    name: "Чехол 3",
    category: "Чехлы",
    price: 990,
    color: "Синий",
    country: "Китай",
    manufacturer: "China",
  },
  {
    id: "5",
    vendorCode: "129413812332",
    name: "Зарядное устройство 2",
    category: "Зарядные устройства",
    price: 990,
    color: "Красный",
    country: "Китай",
    manufacturer: "China",
  },
  {
    id: "6",
    vendorCode: "129512381332",
    name: "Зарядное устройство 3",
    category: "Зарядные устройства",
    price: 990,
    color: "Красный",
    country: "Китай",
    manufacturer: "China",
  },
  {
    id: "7",
    vendorCode: "129412381231",
    name: "Брелок 2",
    category: "Брелоки",
    price: 990,
    color: "Белый",
    country: "США",
    manufacturer: "TEXAS",
  },
  {
    id: "8",
    vendorCode: "129123381239",
    name: "Брелок 3",
    category: "Брелоки",
    price: 990,
    color: "Черный",
    country: "Китай",
    manufacturer: "China",
  },
];

export let electrotoolActions = null;
export const ElectrotoolsProvider = ({ children }) => {
  const [electrotools, setElectrotools] = useState(fakeAccessories);

  electrotoolActions = {
    addElectrotool: (electrotool) => {
      setElectrotools([...electrotools, electrotool]);
    },
    removeElectrotool: (id) => {
      setElectrotools(
        electrotools.filter((electrotool) => electrotool.id !== id)
      );
    },
    updateElectrotool: (electrotool) => {
      setElectrotools(
        electrotools.map((obj) => {
          if (obj.id === electrotool.id) return electrotool;
          return obj;
        })
      );
    },
  };

  const store = {
    electrotools,
  };

  return (
    <ElectrotoolsContext.Provider value={store}>
      {children}
    </ElectrotoolsContext.Provider>
  );
};
