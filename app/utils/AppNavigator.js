import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Screens
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/LoginScreen';
import TruckScren from '../screens/TruckScreen';
import ClientScreen from '../screens/ClientScreen';

//Redux
import { useSelector } from 'react-redux';

const { Navigator, Screen } = createStackNavigator();
const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthScreens = () => (
    <AuthStack.Navigator>
        <Screen
            name="Login"
            component={Login}
            options={{
                header: () => null
            }}
        />
    </AuthStack.Navigator>
)

const AppDrawerStack = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="Все задачи" component={HomeScreen} />
        <Drawer.Screen name="Грузовики" component={TruckScren} />
        <Drawer.Screen name="Клиенты" component={ClientScreen} />
    </Drawer.Navigator>

)

const AppScreens = () => (
    <AppStack.Navigator>
        <Screen 
            name="App" 
            component={AppDrawerStack} 
            options={{
                headerTitle: "Truck Managment"
            }}
            />
    </AppStack.Navigator>
)

export const AppNavigator = () => {

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    console.log(isAuthenticated);
    return (
        <NavigationContainer>
            {isAuthenticated ? (
                <AppScreens />
            ) : (
                <AuthScreens />
            )}
        </NavigationContainer>
    )
}

