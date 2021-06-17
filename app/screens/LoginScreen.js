import React, { useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { useDispatch } from 'react-redux';
import { LogIn } from '../actions/auth';

//Components
import Header from '../components/auth/Header';
import Input from '../components/auth/Input';
import Button from '../components/auth/Button';

import { storeData } from '../../storage';

export default function Login() {

    const dispatch = useDispatch();


    const [formData, setFormData] = useState({
        userHandle: '',
        password: '',
        token: ""
    });

    const onLogInHandler = async () => {
        try {
            dispatch(LogIn(formData.userHandle, formData.password)).then(async (val) => {
                await storeData('token', val["payload"]["token"]);
            }).catch(function (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                  // http.ClientRequest in node.js
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
                console.log(error.config);
            });
        } catch (err) {
            console.log(err);
        }
    }

    const onChangeTextInput = (name, value) => {
        
        if (name === 'userHandle'){
            setFormData({...formData, userHandle: value});
        }else if ( name === 'password'){
            setFormData({...formData, password: value});
        }
    }

    return (
        <View style={styles.container}>
            <Header style={styles.text}>Войти</Header>
            <Input style={styles.input} 
                placeholder="Имя пользователя"
                name={"userHandle"}
                onChangeText={onChangeTextInput}
            />
            <Input style={styles.input} 
                placeholder="Пароль"
                name={'password'}
                onChangeText={onChangeTextInput}
                secureTextEntry
            />
            <Button 
                title={"Войти"} 
                style={styles.loginButton} 
                onPress={onLogInHandler}
            />
            <Header style={styles.caption}>Created By Kolobok Solutions</Header>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 120,
        padding: 20,
        alignItems: 'center'
    },
    input: {
        marginVertical: 8
    },
    text: {
        marginBottom: 32,
    },
    loginButton: {
        marginVertical: 30
    },
    caption:{
        fontSize: 10,
        color: '#A9A9A9',
        marginTop: '90%'
    }


});
