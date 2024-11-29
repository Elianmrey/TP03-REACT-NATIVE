import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, Button, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailScreen = ({ route }) => {
    const { bookKey } = route.params; 
    const [bookDetails, setBookDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookDetails = async () => {
            console.log('Book Key:', bookKey); 
            try {
                const response = await fetch(`https://openlibrary.org${bookKey}.json`);
                const data = await response.json();
                setBookDetails(data);
            } catch (error) {
                console.error('Erro ao buscar detalhes do livro:', error);
            } finally {
                setLoading(false);
            }
        };

        if (bookKey) {
            fetchBookDetails();
        }
    }, [bookKey]);

    const saveToInventory = async (book) => {
        try {
            const inventory = await AsyncStorage.getItem('inventory');
            const inventoryList = inventory ? JSON.parse(inventory) : [];

           
            inventoryList.push(book);

           
            await AsyncStorage.setItem('inventory', JSON.stringify(inventoryList));

            Alert.alert('Sucesso', 'Livro adicionado ao inventário!');
        } catch (error) {
            console.error('Falha ao salvar o livro no inventário:', error);
            Alert.alert('Erro', 'Não foi possível adicionar o livro ao inventário.');
        }
    };

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (!bookDetails) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Detalhes não encontrados</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Título: {bookDetails.title}</Text>
            <Text style={{ fontSize: 18, marginTop: 10 }}>
                Autor: {bookDetails.author_name ? bookDetails.author_name: 'Desconhecido'}
            </Text>
            <Text style={{ fontSize: 18, marginTop: 10 }}>
                Data de publicação: {bookDetails.first_publish_year || 'Não disponível'}
            </Text>
            <Text style={{ fontSize: 18, marginTop: 10 }}>
                Descrição: {bookDetails.description ? bookDetails.description.value : 'Sem descrição disponível'}
            </Text>
            
            <Button
                title="Adicionar ao Inventário"
                onPress={() => saveToInventory(bookDetails)} 
            />
        </ScrollView>
    );
};

export default DetailScreen;


