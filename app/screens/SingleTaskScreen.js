import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Constant from 'expo-constants';
//Components
import LoadingIndicator from '../components/loading/LoadingIndicator';
import BackButton from '../components/buttons/BackButton';
import TaskCard from '../components/cards/TaskCard';
//Redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loadTaskById } from '../actions/task';
import { PreconditionFailed } from 'http-errors';

export default function SingleTaskScreen({ route, navigation }){
    const { taskId } = route.params;

    const dispatch = useDispatch();
    const task = useSelector(state => state.task);

    useEffect(() => {
        dispatch(loadTaskById(taskId));
    },[]);



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BackButton onPress={() => {
                    navigation.goBack()
                }} />
            </View>
            {!task.loading ? (
                <React.Fragment>
                    { task.task !== null ? (
                        <React.Fragment>
                            <View style={styles.topSection}>
                                <Text style={styles.headerTitle}>{task.task.truck.modelName}</Text>
                            </View>
                            <TaskCard data={task.task} />
                        </React.Fragment>
                    ):(
                        <Text>Somthing went wrong try again</Text>
                    )}
                </React.Fragment>
            ):(
                <React.Fragment>
                    <LoadingIndicator />
                </React.Fragment>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D6EAF8"
    },
    header: {
        marginTop: Constant.statusBarHeight,
        padding: 10
    },
    topSection: {
        padding: 30
    },  
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#34495E'
    }
     



});


