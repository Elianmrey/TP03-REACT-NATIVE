import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Usando o Picker correto
import ProductList from './src/components/ProductList';
import SearchBar from './src/components/SearchBar';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('name-asc'); 

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


  const handleSort = (order) => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      switch (order) {
        case 'name-asc':
          return a.nome.toLowerCase() > b.nome.toLowerCase() ? 1 : -1;
        case 'name-desc':
          return a.nome.toLowerCase() < b.nome.toLowerCase() ? 1 : -1;
        case 'price-asc':
          return a.preco - b.preco;
        case 'price-desc':
          return b.preco - a.preco; 
        default:
          return 0;
      }
    });
    setFilteredProducts(sortedProducts);
  };


  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = products.filter((product) =>
      product.nome.toLowerCase().includes(lowercasedQuery) ||
      product.descricao.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredProducts(filtered);
    handleSort(sortOrder); 
  };

  
  const handleSortOrderChange = (order) => {
    setSortOrder(order);
    handleSort(order); 
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
    
      <Picker
        selectedValue={sortOrder}
        style={styles.picker}
        onValueChange={handleSortOrderChange}
      >
        <Picker.Item label="Ordenar por Nome (Crescente)" value="name-asc" />
        <Picker.Item label="Ordenar por Nome (Decrescente)" value="name-desc" />
        <Picker.Item label="Ordenar por Preço (Crescente)" value="price-asc" />
        <Picker.Item label="Ordenar por Preço (Decrescente)" value="price-desc" />
      </Picker>
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
  picker: {
    height: 50,
    width: '100%',
    marginVertical: 16,
  },
});

export default App;
