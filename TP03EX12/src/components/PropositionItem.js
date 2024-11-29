import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PropositionItem = ({ item }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{item.nome}</Text>
        <Text style={styles.description}>{item.ementa}</Text>
    </View>
);

const styles = StyleSheet.create({
    item: {
        marginBottom: 20,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        marginTop: 5,
        color: '#555',
    },
});

export default PropositionItem;
