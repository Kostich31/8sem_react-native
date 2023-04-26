import { useState } from "react";

export const useAccessoryState = (
  initialState = {
    vendorCode: "",
    name: "",
    category: "",
    price: "",
    color: "",
    country: "",
    manufacturer: "",
  }
) => {
  const [accessoryState, setAccessoryState] = useState(initialState);
  return [accessoryState, setAccessoryState];
};
