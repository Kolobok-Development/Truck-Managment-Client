import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import Moment from 'moment';





export default function TruckSingleCard({ data }){

    return (
            <View style={styles.container}>
                    <View style={styles.truckSection}>
                        <Text style={styles.sectionTitle}>Машина</Text>  
                            <View style={styles.SectionItem}>
                                <Feather name="truck" size={29} color="#1E90FF" />
                                <Text style={styles.sectionContentText}>{data.modelName}</Text>  
                            </View>
                            <View style={styles.SectionItem}>
                                <Feather name="truck" size={29} color="#1E90FF" />
                                <Text style={styles.sectionContentText}>{Moment(data.makeYear).format('YYYY') }</Text>  
                            </View>
                            <View style={styles.SectionItem}>
                                <MaterialCommunityIcons name="numeric" size={29} color="#1E90FF" />
                                <Text style={styles.sectionContentText}>{data.tsNumber}</Text> 
                            </View>
                            <View style={styles.SectionItem}>
                                <MaterialIcons name="miscellaneous-services" size={24} color="#1E90FF" />
                                <Text style={styles.sectionContentText}>{data.inServiceCount}</Text> 
                            </View>
                    </View>

                    <View style={styles.clientSection}>
                        <Text style={styles.sectionTitle}>Клиент</Text> 
                        <View style={styles.SectionItem}>
                                <Fontisto name="person" size={23} color="#1E90FF" />
                                <Text style={styles.sectionContentText}>Asdas</Text> 
                        </View>
                        <View style={styles.SectionItem}>
                                <MaterialCommunityIcons name="office-building" size={24} color="#1E90FF" />
                                <Text style={styles.sectionContentText}>asdasd</Text> 
                        </View>
                        <View style={styles.SectionItem}>
                                <MaterialIcons name="email" size={24} color="#1E90FF" />
                                <Text style={styles.sectionContentText}>asdasd</Text> 
                        </View>
                        <View style={styles.SectionItem}>
                                <MaterialIcons name="local-phone" size={24} color="#1E90FF" />
                                <Text style={styles.sectionContentText}>asdasda</Text> 
                        </View>
                    </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'white',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        height: '100%'
    },
    truckSection: {
        alignItems: 'baseline',
        paddingLeft: 50,
        paddingTop: 10,
        borderBottomColor: '#AEB6BF',
        borderBottomWidth: StyleSheet.hairlineWidth
        },
    clientSection: {
        alignItems: 'baseline',
        paddingLeft: 50,
        paddingTop: 10,
    },    
    SectionItem: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingBottom: 10
     
    }, 
    sectionContentText: {
        textAlignVertical: 'center',
        paddingLeft: 10
    }, 
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },  
    
});