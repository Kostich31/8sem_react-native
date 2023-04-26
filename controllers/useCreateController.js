import { accessoriesActions } from "../context/provider";
import uuid from "react-native-uuid";
export const useCreateController = (navigation, state) => {
  const { addAccessory } = accessoriesActions;
  const createAccessory = () => {
    addAccessory({
      id: uuid.v4(),
      vendorCode: state.vendorCode,
      name: state.name,
      category: state.category,
      price: state.price,
      color: state.color,
      country: state.country,
      manufacturer: state.manufacturer,
    });
    navigation.navigate("Accessories");
  };

  return { createAccessory };
};
