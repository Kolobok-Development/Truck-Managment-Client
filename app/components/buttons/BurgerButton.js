import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 




export default function BurgerButton({style, onPress}){

    return (
        <TouchableOpacity style={[styles.container, style]}
            onPress={onPress}
        >
            <MaterialIcons name="menu" size={24} color="#34495E" />
        </TouchableOpacity>

    )

}


const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});