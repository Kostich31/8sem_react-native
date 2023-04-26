import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useAccessoryController } from "../controllers/useAccessoryController";

export default function Accessory({ navigation }) {
  const author = "Костинич К.В. ИУ3-81Б";
  const { data, handleEdit, handleDelete } = useAccessoryController({
    navigation,
  });
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ ...styles.topContainer, marginTop: 60 }}>
          <Text style={{ fontWeight: 900, fontSize: 18 }}>Аксессуары</Text>
          <AntDesign
            style={{ position: "absolute", right: 15 }}
            name="pluscircle"
            size={24}
            color="#008BDB"
            onPress={() => navigation.navigate("CreateAccessory")}
          />
        </View>
      </View>
      <ScrollView style={{ marginVertical: 16 }}>
        <View style={styles.container}>
          {data.length !== 0
            ? data.map((accessory) => (
                <View
                  style={styles.accessory}
                  key={`${accessory.id}${accessory.vendorCode}`}
                >
                  <View>
                    <Text>
                      <Text style={styles.accessoryOption}>id:</Text>{" "}
                      {accessory.id}
                    </Text>
                    <Text>
                      <Text style={styles.accessoryOption}>Артикул:</Text>{" "}
                      {accessory.vendorCode}
                    </Text>
                    <Text>
                      <Text style={styles.accessoryOption}>Наименование:</Text>{" "}
                      {accessory.name}
                    </Text>
                    <Text>
                      <Text style={styles.accessoryOption}>Категория:</Text>{" "}
                      {accessory.category}
                    </Text>
                    <Text>
                      <Text style={styles.accessoryOption}>Стоимость:</Text>{" "}
                      {accessory.price}
                    </Text>
                    <Text>
                      <Text style={styles.accessoryOption}>Цвет:</Text>{" "}
                      {accessory.color}
                    </Text>
                    <Text>
                      <Text style={styles.accessoryOption}>
                        Страна-производитель:
                      </Text>{" "}
                      {accessory.country}
                    </Text>
                    <Text>
                      <Text style={styles.accessoryOption}>Производитель:</Text>{" "}
                      {accessory.manufacturer}
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                      marginTop: 10,
                    }}
                  >
                    <Button
                      title="Изменить"
                      onPress={() => handleEdit(accessory)}
                    />
                    <Button
                      title="Удалить"
                      color="red"
                      onPress={() => handleDelete(accessory.id)}
                    />
                  </View>
                </View>
              ))
            : ""}
        </View>
        <StatusBar style="auto" />
      </ScrollView>
      <View style={styles.footer}>
        <Text style={{ color: "white", fontWeight: 600 }}>{author}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    padding: 16,
  },
  topContainer: {
    width: "100%",
    height: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#1D1D1D",
    marginBottom: -30,
    position: "relative",
  },
  accessory: {
    borderWidth: 1,
    padding: 16,
    width: "100%",
    display: "flex",
    borderColor: "black",
  },
  accessoryOption: {
    fontWeight: 800,
  },
  footer: {
    width: "100%",
    height: 50,
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
