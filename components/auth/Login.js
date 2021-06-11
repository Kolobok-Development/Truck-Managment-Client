import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LogIn } from '../../actions/auth';

export default function Login() {

    const state = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const onClickHanlder = () => {
       dispatch(LogIn("somthing else"));
    };

    return (
        <View style={styles.container}>
            <Text>Log In</Text>
            <Button 
                title='Log in'
                onPress={() => onClickHanlder()}
            />
            <Text>
                {state.token}
            </Text>
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