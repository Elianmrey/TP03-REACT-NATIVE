import React from "react";
import { SectionList, StyleSheet, View } from "react-native";
import SectionHeader from "./src/components/SectionHeader";
import Item from "./src/components/Item";

const DATA = [
  {
    title: "Frutas",
    data: ["Maçã", "Banana", "Laranja", "Uva"],
  },
  {
    title: "Legumes",
    data: ["Cenoura", "Batata", "Brócolis"],
  },
  {
    title: "Bebidas",
    data: ["Água", "Suco", "Refrigerante"],
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item name={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader title={title} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 10,
  },
});
