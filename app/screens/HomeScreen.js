import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import { retrieveData } from '../../storage';

export default function HomeScreen(){

    const [userToken, setUserToken] = useState({
        token: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchToken();
    }, [])
    
    const fetchToken = async () => {
        setIsLoading(true);
        const userTokenTemp = await retrieveData('token');
        setUserToken({ token: userTokenTemp });
        setIsLoading(false);
    }

    return (
        <View style={styles.container}>
            <Text>{userToken.token}</Text>
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
