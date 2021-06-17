import React from 'react';
import {View, Text, StyleSheet} from 'react-native';



export default function TruckScreen(){

    return (
        <View style={styles.container}>
            <Text>Грузовики</Text>
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