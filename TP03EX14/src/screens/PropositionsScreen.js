import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PropositionItem from '../components/PropositionItem';

const PropositionsScreen = ({ navigation }) => {
    const [proposicoes, setProposicoes] = useState([]);
    const [loading, setLoading] = useState(true);

    
    const fetchProposicoes = async () => {
        try {
            const response = await fetch('https://dadosabertos.camara.leg.br/api/v2/proposicoes?pagina=1&itens=10');
            const data = await response.json();
            setProposicoes(data.dados);
            setLoading(false);
        } catch (error) {
            console.error('Erro ao carregar proposições:', error);
            setLoading(false);
        }
    };

    // Carregar as proposições ao montar o componente
    useEffect(() => {
        fetchProposicoes();
    }, []);

    const votar = async (id, concorda) => {
        try {
            const currentVotes = await AsyncStorage.getItem('votes');
            const votes = currentVotes ? JSON.parse(currentVotes) : { concorda: [], naoConcorda: [] };

            if (concorda) {
                votes.concorda.push(id);
            } else {
                votes.naoConcorda.push(id);
            }

            await AsyncStorage.setItem('votes', JSON.stringify(votes));
            navigation.navigate(concorda ? 'Concordadas' : 'Não Concordadas');
        } catch (error) {
            console.error('Erro ao salvar voto:', error);
        }
    };

    return (
        <View style={styles.container}>
            {loading ? (
                <Text>Carregando proposições...</Text>
            ) : (
                <FlatList
                    data={proposicoes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <PropositionItem item={item} votar={votar} />
                    )}
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
});

export default PropositionsScreen;
