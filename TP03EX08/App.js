import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator, Text } from 'react-native';
import ProductList from './src/components/ProductList';
import SearchBar from './src/components/SearchBar';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dfef-dmrn-tps-default-rtdb.firebaseio.com/products.json');
        const data = await response.json();
        const formattedData = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
        setProducts(formattedData);
        setFilteredProducts(formattedData);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = products.filter((product) =>
      product.nome.toLowerCase().includes(lowercasedQuery) ||
      product.descricao.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredProducts(filtered);
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading products...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <ProductList products={filteredProducts} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
