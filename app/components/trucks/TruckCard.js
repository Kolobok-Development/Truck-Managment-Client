import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import Moment from 'moment';


export default function TruckCard({ data }){

    return (
        <View style={styles.container}>
            <View style={styles.cardHeader}>
                <Text style={styles.headerTitle}>{data.modelName}</Text>
                <Text style={styles.headerSubTitle}>{data.tsNumber}</Text>
            </View>
            <View style={styles.cardContent}>
                <MaterialIcons name="settings" size={18} color="#1E90FF" />
                <Text style={styles.contentTitle}>{data.inServiceCount}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D6EAF8',
        marginBottom: 5,
        borderRadius: 8,
        padding: 10,
        margin: 10
        
    },
    headerTitle: {
        fontSize: 20,
        color: '#34495E'
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'baseline',
        flexWrap: 'wrap'
        
    },
    headerSubTitle: {
        fontSize: 13,
        fontWeight: '600',
        color: '#566573'

    },
    contentTitle: {
        fontSize: 15,
        paddingLeft: 5,
        color: '#566573'
    },
   
    
});
