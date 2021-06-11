import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LogIn } from '../../actions/auth';

export default function Login() {

    const [formData, setFormData ] = useState({
        userHandle: 'admin',
        password: 'qwerty1234'
    });

    const state = useSelector(state => state.auth);
    const dispatch = useDispatch()

    const onClickHanlder = () => {
   
        dispatch(LogIn(formData.userHandle, formData.password));
      
    };

    return (
        <View style={styles.container}>
            <Text>Log In</Text>
            <Button 
                title='Log in'
                onPress={() => onClickHanlder()}
            />
          
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});