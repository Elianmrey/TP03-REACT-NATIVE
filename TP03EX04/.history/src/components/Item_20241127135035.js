import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Item = ({ name }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    text: {
        fontSize: 14,
    },
});

export default Item;
