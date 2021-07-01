import React, { useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollViewy, ScrollView} from 'react-native';

//Components
import LoadingIndicator from '../components/loading/LoadingIndicator';
import ClientCard from '../components/clients/ClientCard';
//Redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loadClients } from '../actions/client';

export default function ClientScreen(){

    const clinetState = useSelector(state => state.client);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(loadClients());
    }, []);

    
    return (
        <View style={styles.container}>
            {!clinetState.loading ? (
                <React.Fragment>
                    { clinetState.clients.length > 0 ?(
                        <SafeAreaView>
                            <ScrollView style={styles.ScrollView}>
                                {
                                    clinetState.clients.map((c, i) => (
                                        <ClientCard data={c} key={i} />
                                    ))
                                }
                            </ScrollView>
                        </SafeAreaView>
                    ):(
                        <Text>Клиентов не в базе</Text>
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
    ScrollView: {
     
    }
});