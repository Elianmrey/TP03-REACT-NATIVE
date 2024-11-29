import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title }) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        padding: 20,
        backgroundColor: '#6200ee',
    },
    title: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
});
