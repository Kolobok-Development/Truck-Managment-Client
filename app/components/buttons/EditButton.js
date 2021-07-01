import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 




export default function EditButton({title, style, onPress}){

    return (
        <TouchableOpacity style={[styles.container, style]}
            onPress={onPress}
        >
            <MaterialCommunityIcons name="square-edit-outline" size={24} color="#1E90FF" />
        </TouchableOpacity>

    )

}


const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});