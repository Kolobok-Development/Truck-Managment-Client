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
import SingleTaskScreen from '../screens/SingleTaskScreen';
import SingleTruckScreen from '../screens/SingleTruckScreen';


//Redux
import { useSelector } from 'react-redux';

//Components
import AddButton from '../components/buttons/AddButton';
import BurgerButton from '../components/buttons/BurgerButton';

const { Navigator, Screen } = createStackNavigator();
const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const TruckStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ClientStack = createStackNavigator();

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
                headerLeft: () => (
                    <BurgerButton 
                        onPress={()=> navigation.toggleDrawer()}
                    />
                ),
                headerStyle: {
                   elevation: 0,
                   shadowOpacity: 0,
                   backgroundColor: "#ECF0F1"
                },
                headerTitleStyle: {
                    color: '#34495E'
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
        <Screen 
            name="Task"
            component={SingleTaskScreen}
            options={{
                headerShown: false
            }}
        />

    </HomeStack.Navigator>
)

const TruckScreenStack = () => (
    <TruckStack.Navigator>
        <Screen
            name="TruckMain"
            component={TruckScren}
            options={({ navigation }) => ({
                headerTitle: "Грузовики",
                headerTitleAlign: 'center',
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    backgroundColor: "#ECF0F1"
                },
                headerTitleStyle: {
                    color: '#34495E'
                },
                headerLeft: () => (
                    <BurgerButton 
                        onPress={()=> navigation.toggleDrawer()}
                    />
                ),

            })}
        />
           <Screen
            name="Truck"
            component={SingleTruckScreen}
            options={({}) => ({
                headerShown: false
            })}
        />  
    </TruckStack.Navigator>
)



const AppDrawerStack = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="Все задачи" component={HomeScreenStack} />
        <Drawer.Screen name="Грузовики" component={TruckScreenStack} />
        <Drawer.Screen name="Клиенты" component={ClientScreen} 
             options={({ navigation }) => ({
                headerShown: true,
                headerTitle: "Клинты",
                headerTitleAlign: 'center',
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    backgroundColor: "#ECF0F1"
                },
                headerTitleStyle: {
                    color: '#34495E'
                },
                headerLeft: () => (
                    <BurgerButton 
                        onPress={()=> navigation.toggleDrawer()}
                    />
                ),
                
            })}
        />
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

