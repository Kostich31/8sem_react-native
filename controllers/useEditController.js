import { accessoriesActions } from "../context/provider";

export const useEditController = (navigation, state) => {
  const { updateAccessory } = accessoriesActions;
  const cancelEdit = () => {
    navigation.navigate("Accessories");
  };

  const editAccessory = () => {
    updateAccessory({
      id: state.id,
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
  return { editAccessory, cancelEdit };
};
