import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProposicoesScreen from './src/screens/PropositionsScreen';
import ConcordadasScreen from './src/screens/PropositionsScreen';
import NaoConcordadasScreen from './src/screens/NotAgreeScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Proposições" component={ProposicoesScreen} />
        <Tab.Screen name="Concordadas" component={ConcordadasScreen} />
        <Tab.Screen name="Não Concordadas" component={NaoConcordadasScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
