import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 




export default function EditButton({title, style, onPress}){

    return (
        <TouchableOpacity style={[styles.container, style]}
            onPress={onPress}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>

    )

}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E90FF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 8
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10

    }
});