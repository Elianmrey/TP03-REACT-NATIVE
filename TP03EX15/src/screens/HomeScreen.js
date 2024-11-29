import React, { useState } from 'react';
import { Button, TextInput, View, FlatList, Text, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    const searchBooks = async () => {
        if (query.trim()) {
            try {
                const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
                const data = await response.json();
                setBooks(data.docs || []);
            } catch (error) {
                Alert.alert('Erro', 'Não foi possível buscar os livros. Tente novamente mais tarde.');
            }
        } else {
            Alert.alert('Atenção', 'Digite um termo para buscar.');
        }
    };

    const saveToInventory = async (book) => {
        try {
            const inventory = await AsyncStorage.getItem('inventory');
            const inventoryList = inventory ? JSON.parse(inventory) : [];

            if (inventoryList.some((item) => item.key === book.key)) {
                Alert.alert('Atenção', 'Esse livro já está no inventário.');
                return;
            }

            inventoryList.push(book);
            await AsyncStorage.setItem('inventory', JSON.stringify(inventoryList));
            Alert.alert('Sucesso', 'Livro adicionado ao inventário!');
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível salvar o livro no inventário.');
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
                placeholder="Buscar livros"
                value={query}
                onChangeText={setQuery}
            />
            <Button title="Buscar" onPress={searchBooks} style={{marginBottom:10                
            }}/>   
              <Button
                title="Ir para o Inventário"
                onPress={() => navigation.navigate('Inventory')} style={{marginTop:10 }}
            />
            <FlatList
                data={books}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', { bookKey: item.key })}>
                            <Text>{item.title}</Text>
                        </TouchableOpacity>
                        <Button title="Salvar no Inventário" onPress={() => saveToInventory(item)} />
                    </View>
                )}
            />
       
        </View>
    );
};

export default HomeScreen;
