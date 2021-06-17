import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';



export default function Input({style, name, onChangeText, ...props}) {


    return <TextInput 
            {...props} 
            style={[style, styles.input]} 
            onChangeText={(value) => onChangeText(name, value)} 
            />

  


}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#e8e8e8',
        width: '100%',
        padding: 20,
        borderRadius: 8
    }
});