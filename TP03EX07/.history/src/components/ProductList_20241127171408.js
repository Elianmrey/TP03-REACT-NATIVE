import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ProductCard product={item} />}
            contentContainerStyle={styles.listContainer}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        padding: 16,
    },
});

export default ProductList;
