import React from "react";
import { Text, StyleSheet, View } from "react-native";

const SectionHeader = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#f4f4f4",
        padding: 10,
    },
    headerText: {
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default SectionHeader;
