import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';




export default function BackButton({title, style, onPress}){

    return (
        <TouchableOpacity style={[styles.container, style]}
            onPress={onPress}
        >
            <AntDesign name="plus" size={22} color="#1E90FF"/>
        </TouchableOpacity>

    )

}


const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});