import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { withDecay } from 'react-native-reanimated';
import Moment from 'moment';


export default function Card({ data }){

    return (
        <View style={styles.container}>
            <View style={styles.cardHeader}>
                <Text style={styles.headerTitle}>{data.truck.modelName}</Text>
                <Text style={styles.headerSubTitle}>{data.status}</Text>
            </View>
            <View style={styles.cardContent}>
                <Text style={styles.contentTitle}>{data.truck.tsNumber}</Text>
            </View>
            <View style={styles.cardFooter}>
                <Text style={styles.footerTitle}>{data.workShop}</Text>
                <Text style={styles.footerSubtitle}>{Moment(data.startDate).format('ll')}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D6EAF8',
        marginBottom: 5,
        borderRadius: 8,
        padding: 15,
        margin: 10
        
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    
    },
    cardContent: {

    },
    headerTitle: {
        fontSize: 24,
    },
    headerSubTitle: {
        fontSize: 13,
        fontWeight: '600',
        color: '#FFBF00'

    },
    contentTitle: {
        fontSize: 12,
        color: '#566573'
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingTop: 14
    },
    footerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#34495E'
    },
    footerSubtitle: {
        color: '#34495E',
        fontSize: 12
    }
    
});
