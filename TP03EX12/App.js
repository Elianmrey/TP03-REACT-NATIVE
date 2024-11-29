import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import ProposicoesList from './src/components/PropositionsList';

const App = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);


  const fetchData = async () => {
    if (loading) return; // Evita múltiplas requisições ao mesmo tempo

    setLoading(true);
    try {
      const response = await fetch(`https://dadosabertos.camara.leg.br/api/v2/proposicoes?pagina=${page}&itens=10`);
      const result = await response.json();

      if (result.dados.length === 0) {
        setHasMore(false);
      } else {
        setData(prevData => [...prevData, ...result.dados]);
      }
    } catch (error) {
      console.error('Erro ao buscar proposições:', error);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchData();
  }, [page]);


  const loadMore = () => {
    if (hasMore && !loading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <View style={styles.container}>
      <ProposicoesList
        data={data}
        loading={loading}
        loadMore={loadMore}
        hasMore={hasMore}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
  },
});

export default App;
