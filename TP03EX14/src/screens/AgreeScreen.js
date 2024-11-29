import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet, AsyncStorage } from 'react-native';
import PropositionItem from '../components/PropositionItem';

const AgreeScreen = () => {
    const [agreed, setAgreed] = useState([]);

    const fetchAgreed = async () => {
        try {
            const votes = await AsyncStorage.getItem('votes');
            const parsedVotes = votes ? JSON.parse(votes) : { concorda: [], naoConcorda: [] };
            setAgreed(parsedVotes.concorda);
        } catch (error) {
            console.error('Erro ao carregar proposições Agreed:', error);
        }
    };

    useEffect(() => {
        fetchAgreed();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={agreed}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    item: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default AgreeScreen;
