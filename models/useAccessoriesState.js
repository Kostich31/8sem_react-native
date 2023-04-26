import { useState } from "react";

export const useAccessoriesState = ({ initialState }) => {
  const [accessoriesState, setAccessoriesState] = useState(initialState);

  return [accessoriesState, setAccessoriesState];
};
