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
    { id: '6', title: 'Assistir a uma aula online' },
    { id: '7', title: 'Ir ao supermercado' },
    { id: '8', title: 'Planejar a semana' },
    { id: '9', title: 'Limpar a casa' },
    { id: '10', title: 'Enviar e-mails' },
    { id: '11', title: 'Revisar o projeto' },
    { id: '12', title: 'Fazer um lanche saudável' },
    { id: '13', title: 'Praticar meditação' },
    { id: '14', title: 'Resolver exercícios de lógica' },
    { id: '15', title: 'Chamar um amigo para conversar' },
    { id: '16', title: 'Revisar a lista de tarefas' },
    { id: '17', title: 'Organizar documentos' },
    { id: '18', title: 'Lavar o carro' },
    { id: '19', title: 'Pagar contas' },
    { id: '20', title: 'Cozinhar algo novo' },
    { id: '21', title: 'Assistir a um filme' },
    { id: '22', title: 'Fazer uma caminhada' },
    { id: '23', title: 'Aprender algo novo' },
    { id: '24', title: 'Atualizar o currículo' },
    { id: '25', title: 'Desenhar ou pintar' },
    { id: '26', title: 'Montar um quebra-cabeça' },
    { id: '27', title: 'Estudar uma nova língua' },
    { id: '28', title: 'Arrumar o guarda-roupa' },
    { id: '29', title: 'Planejar uma viagem' },
    { id: '30', title: 'Cuidar do jardim' },
    { id: '31', title: 'Fazer uma ligação importante' },
    { id: '32', title: 'Explorar novas receitas' },
    { id: '33', title: 'Criar uma playlist' },
    { id: '34', title: 'Testar um aplicativo novo' },
    { id: '35', title: 'Escrever no diário' },
    { id: '36', title: 'Ouvir um podcast' },
    { id: '37', title: 'Montar um cronograma' },
    { id: '38', title: 'Fazer um curso online' },
    { id: '39', title: 'Praticar alongamentos' },
    { id: '40', title: 'Dormir cedo' },
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
