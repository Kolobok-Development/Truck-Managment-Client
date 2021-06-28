import React from 'react';
import { Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Screens
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/LoginScreen';
import TruckScren from '../screens/TruckScreen';
import ClientScreen from '../screens/ClientScreen';
import AddTaskScreen from '../screens/AddTaskScreen';


//Redux
import { useSelector } from 'react-redux';

//Components
import AddButton from '../components/buttons/AddButton';

const { Navigator, Screen } = createStackNavigator();
const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();

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

const HomeScreenStack = () => (
    <HomeStack.Navigator>
        <Screen 
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
                headerTitle: "Home",
                headerTitleAlign: 'center',
                headerRight: () => (
                    <AddButton 
                        onPress={() => navigation.navigate("AddTask")}
                    />
                ),
                headerStyle: {
                   
                }
            
            })}
        />
        <Screen 
            name="AddTask"
            component={AddTaskScreen}
            options={({}) => ({
                headerTitle: "Добавить",
                headerTitleAlign: 'center',

            })}

        />

    </HomeStack.Navigator>
)

const AppDrawerStack = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="Все задачи" component={HomeScreenStack} />
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
                headerShown: false
            }}
            />
    </AppStack.Navigator>
)



export const AppNavigator = () => {
    const authState = useSelector((state) => state.auth)    
    return (
        <NavigationContainer>
            {authState.isAuthenticated ? (
                <AppScreens />
            ) : (
                <AuthScreens />
        
            )}
        </NavigationContainer>
    )
}

