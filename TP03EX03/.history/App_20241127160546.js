import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ListItem from './src/components/ListItem';

const App = () => {
  const data = [
    { id: '1', title: 'Comprar leite' },
    { id: '2', title: 'Estudar React Native' },
    { id: '3', title: 'Fazer exercícios físicos' },
    { id: '4', title: 'Ler um livro' },
    { id: '5', title: 'Organizar tarefas' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem title={item.title} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default App;
