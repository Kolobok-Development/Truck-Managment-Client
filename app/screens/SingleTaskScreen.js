import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Constant from 'expo-constants';
//Components
import LoadingIndicator from '../components/loading/LoadingIndicator';

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
                <Text>sasdasd</Text>
            </View>
            {!task.loading ? (
                <React.Fragment>
                    { task.task !== null ? (
                        <View style={styles.content}>
                            <View style={styles.topSection}>
                                <Text>Somthing went wrong try again</Text>
                            </View>
                            <View style={styles.midSection}>

                            </View>
                            <View style={styles.actions}>

                            </View>
                        </View>
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
        height: 200,
        marginTop: Constant.statusBarHeight
    },
    content: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#FBFCFC',
        
    }
     



});


