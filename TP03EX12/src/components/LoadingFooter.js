import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const LoadingFooter = ({ loading }) => {
    if (!loading) return null;

    return (
        <View style={styles.footer}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        padding: 20,
        alignItems: 'center',
    },
});

export default LoadingFooter;
