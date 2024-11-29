import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TaskList = ({ tasks }) => {
    return (
        <View style={styles.listContainer}>
            {tasks.map((task) => (
                <View key={task.id} style={styles.taskItem}>
                    <Text style={styles.taskText}>{task.title}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        marginTop: 10,
    },
    taskItem: {
        backgroundColor: "orange",
        padding: 15,
        marginVertical: 5,
        borderRadius: 8,
        borderRadius: 18,
    },
    taskText: {
        fontSize: 16,
    },
});

export default TaskList;
