import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Header title="Welcome!" />
            <Text style={styles.text}>Voce</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
    },
});
