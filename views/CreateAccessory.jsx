import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { useCreateController } from "../controllers/useCreateController";
import { useAccessoryState } from "../models/useAccessoryState";

export default function CreateAccessory({ navigation }) {
  const [accessoryState, setAccessoryState] = useAccessoryState();
  const { createAccessory } = useCreateController(navigation, accessoryState);
  return (
    <View style={styles.container}>
      <ScrollView style={{ marginVertical: 30 }}>
        <Text style={styles.text}>Введите артикул:</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.textInput}
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
      <View>
        <Button title={"Создать"} onPress={createAccessory} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    gap: 8,
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    height: 40,
    textAlignVertical: "top",
    padding: 8,
    fontSize: 16,
  },
  text: {
    width: "100%",
    fontSize: 18,
    textAlign: "left",
  },
});
