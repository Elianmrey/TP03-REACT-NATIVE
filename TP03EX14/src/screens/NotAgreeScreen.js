import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NotAgreeScreen = () => {
    const [naoConcordadas, setNaoConcordadas] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(false); 

    const fetchNaoConcordadas = async () => {
        try {
            const votes = await AsyncStorage.getItem('votes');
            const parsedVotes = votes ? JSON.parse(votes) : { concorda: [], naoConcorda: [] };
            setNaoConcordadas(parsedVotes.naoConcorda);
            setLoading(false); 
        } catch (error) {
            console.error('Erro ao carregar proposições não concordadas:', error);
            setError(true); 
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNaoConcordadas();
    }, []);

    if (loading) {
        return <Text>Carregando proposições não concordadas...</Text>;
    }

    if (error) {
        return <Text>Erro ao carregar dados.</Text>;
    }

    return (
        <View style={styles.container}>
            {naoConcordadas.length === 0 ? (
                <Text style={styles.emptyMessage}>Nenhuma proposição não concordada.</Text>
            ) : (
                <FlatList
                    data={naoConcordadas}
                    keyExtractor={(item) => item.toString()}
                    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                />
            )}
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
    emptyMessage: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
        color: 'gray',
    },
});

export default NotAgreeScreen;
