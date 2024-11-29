import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.bar, { width: `${progress * 100}%` }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 10,
        backgroundColor: '#ddd',
        borderRadius: 5,
        overflow: 'hidden',
        marginBottom: 20,
    },
    bar: {
        height: '100%',
        backgroundColor: '#2196F3',
    },
});

export default ProgressBar;
