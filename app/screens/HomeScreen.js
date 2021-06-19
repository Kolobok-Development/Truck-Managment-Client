import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, SafeAreaView, ScrollView, Dimensions} from 'react-native';

import { useSelector } from 'react-redux';

//Redux
import { useDispatch } from 'react-redux';
import { loadCurrentUser } from '../actions/auth';

import { loadTasks, loadTaskById } from '../actions/task';

export default function HomeScreen( navigator ){

    const [tasksData, setTasksData] = useState({
        tasks: []
    });

    const tasksState = useSelector(state => state.task);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCurrentUser());
        dispatch(loadTasks());
    },[]);

    const pushContent = (item, index) => {
        switch (item.status.toString()) {
            case "waiting":
                return <TouchableOpacity 
                    onPress={ event => { dispatch(loadTaskById(item._id)); }} 
                    key={item.creationDate.toString()} 
                    style={styles.buttonWaiting}> 
                        <Text>Статус: {item.status}</Text>
                        <Text>Механик: {item.mechanic}</Text>
                </TouchableOpacity>
            case "closed":
                return <TouchableOpacity 
                    onPress={ event => { dispatch(loadTaskById(item._id)); }} 
                    key={item.creationDate.toString()} 
                    style={styles.buttonClosed}> 
                        <Text>Статус: {item.status}</Text>
                        <Text>Механик: {item.mechanic}</Text>
                </TouchableOpacity>
            default:
                return <TouchableOpacity 
                    onPress={ event => { dispatch(loadTaskById(item._id)); }} 
                    key={item.creationDate.toString()} 
                    style={styles.button}> 
                        <Text>Статус: {item.status}</Text>
                        <Text>Механик: {item.mechanic}</Text>
                </TouchableOpacity>
        }
    }
    

    const Tasks = ({ show }) => {
        let content = [];
      
        if (show) {
            tasksState.tasks.map((item, index) => {
                content.push(pushContent(item, index));
            });
        } else {
          content = (
            <View>
              <Text style={{ fontSize: 60 }}>Don't Show!</Text>
            </View>
          )
        }
      
        return <View style={{ padding: 24 }}>{content}</View>
    }

    return (
        <View style={styles.container}>
            {tasksState !== undefined ? (
                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.scrollView}>
                        <Tasks show={true} />
                    </ScrollView>
                </SafeAreaView>
            ):(
                <Text>Все задачи выполнены!</Text>
            )}
        </View>
    )
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
    },
    scrollView: {
    },
    buttonWaiting: {
        width: Dimensions.get('window').width - 50,
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: 'yellow',
        padding: 10
    },
    buttonClosed: {
        width: Dimensions.get('window').width - 50,
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10
    }
});


