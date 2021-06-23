import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions} from 'react-native';

import Tasks from '../components/home/Tasks';

import { useSelector } from 'react-redux';

//Redux
import { useDispatch } from 'react-redux';
import { loadCurrentUser } from '../actions/auth';

import { loadTasks } from '../actions/task';

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

    return (
        <View style={styles.container}>
            {tasksState !== undefined ? (
                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.scrollView}>
                        <Tasks tasksState={tasksState} dispatch={dispatch}  />
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
