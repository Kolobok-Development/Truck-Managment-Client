import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { loadTaskById } from '../../actions/task';

export default function Tasks({tasksState, dispatch}) {
    let content = [];
  
    tasksState.tasks.map((item, index) => {
        content.push(pushContent(item, index, dispatch));
    });

    return <View style={{ padding: 24 }}>{content}</View>
}

const pushContent = (item, index, dispatch) => {
    return <TouchableOpacity 
            onPress={ event => { dispatch(loadTaskById(item._id)); }} 
            key={item.creationDate.toString()} 
            style={styles.button}> 
                <Text>Статус: {item.status}</Text>
                <Text>Механик: {item.mechanic}</Text>
        </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: Dimensions.get('window').width - 50,
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    }
});
