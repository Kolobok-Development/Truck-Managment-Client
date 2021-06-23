import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { loadTruckById } from '../../actions/truck';

export default function Trucks({trucksState, dispatch}) {
    let content = [];

    trucksState.trucks.map((item, index) => {
        content.push(pushContent(item, index, dispatch));
    });
  
    return <View style={{ padding: 24 }}>{content}</View>
}

const pushContent = (item, index, dispatch) => {
    return <TouchableOpacity 
        onPress={ event => { dispatch(loadTruckById(item._id)); }} 
        key={item.tsNumber.toString()} 
        style={styles.button}> 
            <Text>ТС Номер: {item.tsNumber}</Text>
            <Text>Обслуживалась {item.inServiceCount} раз!</Text>
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