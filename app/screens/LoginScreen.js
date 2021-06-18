import React, { useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LogIn } from '../actions/auth';

//Components
import Header from '../components/auth/Header';
import Input from '../components/auth/Input';
import Button from '../components/auth/Button';
import LoadingIndicator from '../components/loading/LoadingIndicator';


export default function Login() {

    const dispatch = useDispatch();
    const authState = useSelector(state => state.auth);


    const [formData, setFormData] = useState({
        userHandle: '',
        password: '',
        token: ""
    });

    const onLogInHandler = async () => {
        dispatch(LogIn(formData.userHandle, formData.password));
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
            {!authState.loading ? (
                <React.Fragment>
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
                </React.Fragment>
            ):(
                <LoadingIndicator style={styles.loadingIndicator} />
            )}
            
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
    },

});
