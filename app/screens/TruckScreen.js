import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Dimensions} from 'react-native';

import Trucks from '../components/trucks/Trucks';

import { loadTruckById, loadTrucks } from '../actions/truck';

import { useSelector } from 'react-redux';

//Redux
import { useDispatch } from 'react-redux';

export default function TruckScreen(){

    const trucksState = useSelector(state => state.truck);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(loadTrucks());
    },[]);

    return (
        <View style={styles.container}>
            {trucksState !== undefined ? (
                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.scrollView}>
                        <Trucks trucksState={trucksState} dispatch={dispatch}  />
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
    }
});
