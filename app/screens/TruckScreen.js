import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Dimensions} from 'react-native';

//Redux
import LoadingIndicator from '../components/loading/LoadingIndicator';
import TruckCard from '../components/trucks/TruckCard';

import { loadTruckById, loadTrucks } from '../actions/truck';

import { useSelector } from 'react-redux';

//Redux
import { useDispatch } from 'react-redux';

export default function TruckScreen({navigation}){

    const truck = useSelector(state => state.truck);
    const { loading } = truck;

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(loadTrucks());
    },[]);

    /*
         {trucksState !== undefined ? (
                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.scrollView}>
                        <Trucks trucksState={trucksState} dispatch={dispatch}  />
                    </ScrollView>
                </SafeAreaView>
            ):(
                <Text>Все задачи выполнены!</Text>
            )}
    */
    return (
        <View style={styles.container}>
            {!loading ? (
                <React.Fragment>
                    {truck.trucks.length > 0 ? (
                        <SafeAreaView>
                            <ScrollView style={styles.scrollView}>
                                {
                                    truck.trucks.map((t, i) => (
                                        <TouchableOpacity key={i} onPress={() => {
                                            navigation.navigate("Truck", {
                                                truckId: t._id
                                            })
                                        }}>
                                            <TruckCard data={t} />
                                        </TouchableOpacity>
                                    ))
                                }
                            </ScrollView>
                        </SafeAreaView>
                    ): (
                      <Text>Машин нету в базе</Text>
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
    
});
