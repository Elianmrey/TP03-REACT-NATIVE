import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListItem = ({ title }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    itemText: {
        fontSize: 16,
    },
});

export default ListItem;
