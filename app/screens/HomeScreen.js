import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

//Redux
import { useDispatch } from 'react-redux';
import { loadCurrentUser } from '../actions/auth';

export default function HomeScreen(){

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(loadCurrentUser()); 
    },[]);
    

    return (
        <View style={styles.container}>
            <Text>Main Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
