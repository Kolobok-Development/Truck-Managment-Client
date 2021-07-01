import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 



export default function ClientCard({ data }){

    return (
        <View style={styles.container}>
            <View style={styles.cardHeader}>
                <Text style={styles.headerTitle}>{data.companyName}</Text>
                <Text style={styles.headerSubTitle}>{data.nameHandle}</Text>
            </View>
            <View style={styles.cardContent}>
                <View style={styles.clientEmail}> 
                    <MaterialIcons name="email" size={18} color="#1E90FF" />
                    <Text style={styles.contentTitle}>{data.email}</Text>
                </View>
                <View style={styles.clientPhone}> 
                <MaterialIcons name="local-phone" size={18} color="#1E90FF" />
                    <Text style={styles.contentTitle}>{data.phoneNumber}</Text>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D6EAF8',
        marginBottom:1,
        borderRadius: 8,
        padding: 10,
        margin: 10
        
    },
    headerTitle: {
        fontSize: 18,
        color: '#34495E'
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    
    },
    cardContent: {
        paddingTop: 5,
        
    },
    clientEmail: {
        flexDirection: 'row',
        paddingBottom: 5,
        alignItems: 'baseline'
    },
    clientPhone: {
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    headerSubTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#566573'

    },
    contentTitle: {
        fontSize: 15,
        paddingLeft: 5,
        color: '#566573'
    },
   
    
});