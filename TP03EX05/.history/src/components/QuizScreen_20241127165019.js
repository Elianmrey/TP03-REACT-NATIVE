import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ProgressBar from './ProgressBar';

const QuizScreen = ({ navigation, question, current, total }) => {
    const handleNext = () => {
        if (current < total) {
            navigation.navigate(`Question${current + 1}`);
        } else {
            alert('Você completou o Quiz!');
        }
    };

    return (
        <View style={styles.container}>
            <ProgressBar progress={current / total} />
            <Text style={styles.question}>{question.question}</Text>
            {question.options.map((option, index) => (
                <TouchableOpacity key={index} style={styles.optionButton} onPress={handleNext}>
                    <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    question: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    optionButton: {
        backgroundColor: '#2196F3',
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
    },
    optionText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default QuizScreen;
