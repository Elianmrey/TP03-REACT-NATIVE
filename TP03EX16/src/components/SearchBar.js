import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

const SearchBar = ({ onSearch }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Buscar notícias..."
                onChangeText={onSearch}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "#fff",
    },
    input: {
        height: 40,
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
});

export default SearchBar;
