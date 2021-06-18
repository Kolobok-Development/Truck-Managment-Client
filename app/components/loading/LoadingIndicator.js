import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';



export default function LoadingIndicator( size, style){

    return <ActivityIndicator size='large' color="#1E90FF" />
  
}

const styles = StyleSheet.create({
    indicator: {

    }
});