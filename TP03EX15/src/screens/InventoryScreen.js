import React, { useState, useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const InventoryScreen = ({ navigation }) => {
    const [inventory, setInventory] = useState([]);

    const loadInventory = async () => {
        try {
            const storedInventory = await AsyncStorage.getItem('inventory');
            if (storedInventory) {
                setInventory(JSON.parse(storedInventory));
            }
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível carregar o inventário.');
        }
    };

    useEffect(() => {
        loadInventory();
    }, []);

    if (inventory.length === 0) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>O inventário está vazio.</Text>
            </View>
        );
    }

    return (
        <View style={{ padding: 20 }}>
            <FlatList
                data={inventory}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Detail', { bookKey: item.key })}
                        style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
                    >
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default InventoryScreen;
