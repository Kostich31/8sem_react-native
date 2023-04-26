import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  ScrollView,
  Text,
} from "react-native";
import { useEditController } from "../controllers/useEditController";
import { useAccessoryState } from "../models/useAccessoryState";

export default function EditAccessory({ navigation, route }) {
  const { accessory } = route.params;
  const [accessoryState, setAccessoryState] = useAccessoryState(accessory);
  const { editAccessory, cancelEdit } = useEditController(
    navigation,
    accessoryState
  );

  return (
    <View style={styles.container}>
      <ScrollView style={{ marginVertical: 30, width: "100%" }}>
        <Text style={styles.text}>Введите артикул:</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          onChangeText={(text) =>
            setAccessoryState((prevState) => ({
              ...prevState,
              vendorCode: text,
            }))
          }
          value={accessoryState.vendorCode}
        />
        <Text style={styles.text}>Введите наименование аксессуара:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) =>
            setAccessoryState((prevState) => ({
              ...prevState,
              name: text,
            }))
          }
          value={accessoryState.name}
        />
        <Text style={styles.text}>Введите категорию:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) =>
            setAccessoryState((prevState) => ({
              ...prevState,
              category: text,
            }))
          }
          value={accessoryState.category}
        />
        <Text style={styles.text}>Введите стоимость:</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          onChangeText={(text) =>
            setAccessoryState((prevState) => ({
              ...prevState,
              price: text,
            }))
          }
          value={accessoryState.price}
        />
        <Text style={styles.text}>Введите цвет:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) =>
            setAccessoryState((prevState) => ({
              ...prevState,
              color: text,
            }))
          }
          value={accessoryState.color}
        />
        <Text style={styles.text}>Введите страну производитель:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) =>
            setAccessoryState((prevState) => ({
              ...prevState,
              country: text,
            }))
          }
          value={accessoryState.country}
        />
        <Text style={styles.text}>Введите компанию производитель:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) =>
            setAccessoryState((prevState) => ({
              ...prevState,
              manufacturer: text,
            }))
          }
          value={accessoryState.manufacturer}
        />
      </ScrollView>

      <View style={{ display: "flex", flexDirection: "row", gap: 30 }}>
        <Button
          style={{ marginBottom: 16 }}
          title="Отмена"
          onPress={cancelEdit}
        />
        <Button title="Изменить" color="green" onPress={editAccessory} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    height: 50,
    textAlignVertical: "top",
    padding: 16,
  },
});
