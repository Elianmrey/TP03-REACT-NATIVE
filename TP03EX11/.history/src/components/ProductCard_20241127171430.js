import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ product }) => {
    return (
        <View style={styles.card}>
            <Image
                source={{ uri: product.imagens[0] }}
                style={styles.image}
            />
            <Text style={styles.name}>{product.nome}</Text>
            <Text style={styles.price}>R$ {product.preco.toFixed(2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
    },
    price: {
        fontSize: 16,
        color: '#00b894',
        marginTop: 4,
    },
});

export default ProductCard;
