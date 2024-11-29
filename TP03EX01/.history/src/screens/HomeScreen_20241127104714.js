import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Header title="Ben-Vindo!" />
            <Text style={styles.text}>Você está na Home Screen</Text>
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
