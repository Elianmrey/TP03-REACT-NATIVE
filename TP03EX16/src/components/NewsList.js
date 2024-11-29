import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const NewsList = ({ news }) => {
    // Processando a data recebida
    const rawDate = news?.data_publicacao;
    const formattedDate = rawDate
        ? dayjs(rawDate, "DD/MM/YYYY HH:mm:ss").format("DD [de] MMMM [de] YYYY, HH:mm")
        : "Data não disponível";

    const editorias = news?.editorias ? news.editorias : "Sem editorias disponíveis";
    const imageUrl = news?.imagens ? news.imagens : "https://via.placeholder.com/150";

    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{news?.titulo || "Título não disponível"}</Text>
                <Text style={styles.date}>{formattedDate}</Text>
                <Text style={styles.editorias}>{editorias}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: 10,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    date: {
        fontSize: 14,
        color: "#666",
        marginBottom: 5,
    },
    editorias: {
        fontSize: 14,
        color: "#888",
        fontStyle: "italic",
    },
});

export default NewsList;
