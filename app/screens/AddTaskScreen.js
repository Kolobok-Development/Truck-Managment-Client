import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function AddTaskScreen(){

    return (
        <View style={styles.container}>
            <Text>Add new Task</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});