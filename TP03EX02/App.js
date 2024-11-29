import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TaskList from "./src/components/TaskList";

export default function App() {
  const tasks = [
    { id: 1, title: "Comprar leite" },
    { id: 2, title: "Lavar o carro" },
    { id: 3, title: "Estudar React Native" },
    { id: 4, title: "Fazer exercícios físicos" },
    { id: 5, title: "Enviar relatório" },
    { id: 6, title: "Planejar viagem" },
    { id: 7, title: "Organizar armário" },
    { id: 8, title: "Responder emails" },
    { id: 9, title: "Assistir tutorial de programação" },
    { id: 10, title: "Preparar almoço" },
    { id: 11, title: "Revisar orçamento mensal" },
    { id: 12, title: "Ler um livro" },
    { id: 13, title: "Limpar a cozinha" },
    { id: 14, title: "Verificar contas a pagar" },
    { id: 15, title: "Praticar meditação" },
    { id: 16, title: "Atualizar currículo" },
    { id: 17, title: "Ir ao mercado" },
    { id: 18, title: "Fazer caminhada" },
    { id: 19, title: "Estudar algoritmos" },
    { id: 20, title: "Planejar reunião" },
    { id: 21, title: "Verificar status do projeto" },
    { id: 22, title: "Revisar apresentações" },
    { id: 23, title: "Limpar o quintal" },
    { id: 24, title: "Ajustar configurações do celular" },
    { id: 25, title: "Fazer backup de arquivos" },
    { id: 26, title: "Atualizar software do computador" },
    { id: 27, title: "Criar lista de compras" },
    { id: 28, title: "Lavar roupas" },
    { id: 29, title: "Fazer orçamento para viagem" },
    { id: 30, title: "Organizar agenda" },
    { id: 31, title: "Desenvolver projeto pessoal" },
    { id: 32, title: "Assistir a um documentário" },
    { id: 33, title: "Limpar a geladeira" },
    { id: 34, title: "Planejar refeições da semana" },
    { id: 35, title: "Participar de webinar" },
    { id: 36, title: "Configurar smart TV" },
    { id: 37, title: "Preparar café da manhã especial" },
    { id: 38, title: "Estudar sobre investimentos" },
    { id: 39, title: "Pagar contas atrasadas" },
    { id: 40, title: "Organizar documentos" },
    { id: 41, title: "Fazer revisão do carro" },
    { id: 42, title: "Assistir filme com a família" },
    { id: 43, title: "Planejar próximo mês" },
    { id: 44, title: "Finalizar leitura de artigo técnico" },
    { id: 45, title: "Praticar exercícios de lógica" },
    { id: 46, title: "Estudar inglês" },
    { id: 47, title: "Comprar presente para amigo" },
    { id: 48, title: "Planejar eventos do final de semana" },
    { id: 49, title: "Atualizar redes sociais profissionais" },
    { id: 50, title: "Organizar fotos no celular" },
    { id: 51, title: "Pesquisar sobre tecnologia emergente" },
    { id: 52, title: "Escrever post para blog pessoal" },
    { id: 53, title: "Refazer exercícios de cálculo" },
    { id: 54, title: "Organizar estante de livros" },
    { id: 55, title: "Treinar técnicas de respiração" },
    { id: 56, title: "Praticar escrita criativa" },
    { id: 57, title: "Testar nova aplicação móvel" },
  ];


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Tarefas</Text>
      <ScrollView>
        <TaskList tasks={tasks} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "indigo",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "orange",
  },
});
