import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';



export default function Button({title, style, onPress}) {


    return (
        <TouchableOpacity style={[styles.container, style]}
            onPress={onPress}
        >
            <Text style={styles.text}>
                {title.toUpperCase()}
            </Text>
        </TouchableOpacity>
    )


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E90FF',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 8
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14

    }
});