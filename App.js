import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateAccessory from "./views/CreateAccessory";
import EditAccessory from "./views/EditAccessory";
import Accessory from "./views/Accessory";
import { AccessoriesProvider } from "./context/index";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AccessoriesProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Accessories"
            component={Accessory}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="CreateAccessory" component={CreateAccessory} />
          <Stack.Screen name="EditAccessory" component={EditAccessory} />
        </Stack.Navigator>
      </NavigationContainer>
    </AccessoriesProvider>
  );
}
