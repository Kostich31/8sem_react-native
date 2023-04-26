import { useContext } from "react";
import { accessoriesActions } from "../context/provider";
import { AccessoriesContext } from "../context";
export const useAccessoryController = ({ navigation }) => {
  const { removeAccessory } = accessoriesActions;
  const store = useContext(AccessoriesContext);
  const data = store.accessories;
  
  const handleEdit = (accessory) => {
    navigation.navigate("EditAccessory", { accessory });
  };

  const handleDelete = (id) => {
    removeAccessory(id);
  };

  return { data, handleEdit, handleDelete };
};
