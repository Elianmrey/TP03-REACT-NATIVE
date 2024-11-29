
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProposicaoItem = ({ item, votar }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{item.nome}</Text>
            <Text style={styles.description}>{item.ementa}</Text>
            <View style={styles.buttons}>
                <Button title="Concordo" onPress={() => votar(item.id, true)} />
                <Button title="Não Concordo" onPress={() => votar(item.id, false)} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        marginBottom: 20,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        gap:10
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
    buttons: {
        margin: 10,

    },
});

export default ProposicaoItem;
