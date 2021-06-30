import React,  {  useEffect } from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions, TouchableOpacity} from 'react-native';

//Components
import Tasks from '../components/home/Tasks';
import LoadingIndicator from '../components/loading/LoadingIndicator';
import Card from '../components/home/Card';

//Redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loadCurrentUser } from '../actions/auth';
import { loadTasks } from '../actions/task';


export default function HomeScreen({ navigation } ){

    const task = useSelector(state => state.task);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCurrentUser());
        dispatch(loadTasks());
    },[]);


    return (
        <View style={styles.container}>
            {!task.loading ? (
                <React.Fragment>
                    { task.tasks.length > 0 ? (
                        <SafeAreaView>
                            <ScrollView style={styles.scrollView}>
                                    {
                                        task.tasks.map((t, i) => (
                                            <TouchableOpacity key={i} onPress={() => {
                                                navigation.navigate("Task", {
                                                    taskId: t._id
                                                });
                                            } }>
                                                <Card  data={t} />
                                            </TouchableOpacity>
                                            
                                        ))
                                    }
                            </ScrollView>
                        </SafeAreaView>
                    ):(
                        <Text>Все задачи выполнины</Text>
                    )}
                </React.Fragment>
            ):(
                <LoadingIndicator />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBFCFC'
        
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
