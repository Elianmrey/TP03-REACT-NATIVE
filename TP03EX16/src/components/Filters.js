import React, { useState } from "react";
import { View, Button, StyleSheet, TextInput } from "react-native";

const Filters = ({ onSort, onFilterByDate }) => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    return (
        <View style={styles.container}>
            <Button title="Ordenar por Título" onPress={() => onSort("titulo")} />
            <Button title="Ordenar por Data" onPress={() => onSort("date")} />
            <Button title="Ordenar por Editorial" onPress={() => onSort("editoriais")} />
            <TextInput
                style={styles.input}
                placeholder="Data início (YYYY-MM-DD)"
                value={startDate}
                onChangeText={setStartDate}
            />
            <TextInput
                style={styles.input}
                placeholder="Data fim (YYYY-MM-DD)"
                value={endDate}
                onChangeText={setEndDate}
            />
            <Button title="Filtrar por Período" onPress={() => onFilterByDate(startDate, endDate)} />
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
        marginVertical: 5,
    },
});

export default Filters;
