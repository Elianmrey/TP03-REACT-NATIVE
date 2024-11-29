import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuizScreen from './src/components/QuizScreen';

const Stack = createStackNavigator();

const App = () => {
  const questions = [
    { id: 1, question: 'Qual é a capital do Brasil?', options: ['São Paulo', 'Brasília', 'Rio de Janeiro', 'Salvador'], answer: 'Brasília' },
    { id: 2, question: 'Quanto é 2 + 2?', options: ['3', '4', '5', '6'], answer: '4' },
    { id: 3, question: 'Qual é o maior oceano?', options: ['Atlântico', 'Índico', 'Ártico', 'Pacífico'], answer: 'Pacífico' },
    { id: 4, question: 'Qual é a cor do céu?', options: ['Verde', 'Azul', 'Amarelo', 'Vermelho'], answer: 'Azul' },
    { id: 5, question: 'Quanto é 10 / 2?', options: ['2', '3', '4', '5'], answer: '5' },
    { id: 6, question: 'Qual é o país do samba?', options: ['Argentina', 'Brasil', 'Colômbia', 'Chile'], answer: 'Brasil' },
    { id: 7, question: 'Qual é a capital da França?', options: ['Londres', 'Paris', 'Berlim', 'Roma'], answer: 'Paris' },
    { id: 8, question: 'Qual é o menor continente?', options: ['Ásia', 'África', 'Europa', 'Oceania'], answer: 'Oceania' },
    { id: 9, question: 'Quanto é 3 x 3?', options: ['6', '9', '12', '15'], answer: '9' },
    { id: 10, question: 'Qual é a língua mais falada no mundo?', options: ['Inglês', 'Espanhol', 'Chinês', 'Hindu'], answer: 'Chinês' },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {questions.map((q, index) => (
          <Stack.Screen key={q.id} name={`Question${index + 1}`}>
            {props => <QuizScreen {...props} question={q} current={index + 1} total={questions.length} />}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
