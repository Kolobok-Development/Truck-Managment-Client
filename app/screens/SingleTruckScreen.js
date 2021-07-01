import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Constant from 'expo-constants';
//Components
import LoadingIndicator from '../components/loading/LoadingIndicator';
import BackButton from '../components/buttons/BackButton';
import TaskCard from '../components/cards/TaskCard';
import AddButton from '../components/buttons/AddButton';
import EditButton from '../components/buttons/EditButton';
import StatusButton from '../components/buttons/StatusButton';
import TruckSingleCard from '../components/trucks/TruckSingleCard';

//Redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loadTruckById } from '../actions/truck';


export default function SingleTruckScreen({ route, navigation }){
    
    const {truckId} = route.params;
    const dispatch = useDispatch();
    const truck = useSelector(state => state.truck);
    

    useEffect(() => {
        dispatch(loadTruckById(truckId));
    },[]);



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BackButton onPress={() => {
                    navigation.goBack()
                }} />
            </View>
            {!truck.loading ? (
                <React.Fragment>
                    { truck.truck !== null ? (
                        <React.Fragment>
                            <View style={styles.topSection}>
                                <View  style={styles.topSectionHeader}>
                                    <Text style={styles.headerTitle}>{truck.truck.modelName}</Text>
                                </View>    
                            </View>
                            <TruckSingleCard data={truck.truck} />
                        </React.Fragment>
                    ):(
                        <Text>Somthing went wrong try again</Text>
                    )}
                </React.Fragment>
            ):(
                <React.Fragment>
                    <LoadingIndicator />
                </React.Fragment>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D6EAF8"
    },
    header: {
        marginTop: Constant.statusBarHeight,
        padding: 10
    },
    topSection: {
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    topSectionHeader: {
        flexDirection: 'row',
    },    
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#34495E'
    },
    statusAction: {
        justifyContent: 'center'
    }
   
});