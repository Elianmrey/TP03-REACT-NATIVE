import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';  // Importação corrigida
import ProductList from './src/components/ProductList';
import SearchBar from './src/components/SearchBar';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('asc'); // Estado para a ordenação (crescente ou decrescente)

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

  // Função de ordenação
  const handleSort = (order) => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (order === 'asc') {
        return a.nome.toLowerCase() > b.nome.toLowerCase() ? 1 : -1;
      } else {
        return a.nome.toLowerCase() < b.nome.toLowerCase() ? 1 : -1;
      }
    });
    setFilteredProducts(sortedProducts);
  };

  // Função de busca e ordenação
  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = products.filter((product) =>
      product.nome.toLowerCase().includes(lowercasedQuery) ||
      product.descricao.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredProducts(filtered);
    handleSort(sortOrder); // Reaplica a ordenação após o filtro
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
        <Picker.Item label="Ordenar por Nome (Crescente)" value="asc" />
        <Picker.Item label="Ordenar por Nome (Decrescente)" value="desc" />
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
