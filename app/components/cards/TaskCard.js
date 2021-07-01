import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import Moment from 'moment';

//Components
import Button from '../auth/Button';


export default function TaskCard({ data }){

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.scrollViewContainer}>
                <ScrollView style={styles.scrollView}>            
                    <View style={styles.taskSection}>
                        <Text style={styles.sectionTitle}>Инфо</Text> 
                        <View style={styles.taskSectionItemOne}>
                                <Ionicons name="md-person-circle-outline" size={29} color="#1E90FF" />
                                <Text style={styles.sectionOneText}>{data.mechanic}</Text>
                            </View>

                            <View style={styles.taskSectionItemOne}>
                                <MaterialIcons name="date-range" size={29} color="#1E90FF" />
                                <Text style={styles.sectionOneText}>{Moment(data.startDate).format('ll')}</Text> 
                            </View>
                            <View style={styles.taskSectionItemOne}>
                                <MaterialIcons name="update" size={29} color="#1E90FF" />
                                <Text style={styles.sectionOneText}>{data.status}</Text> 
                            </View>
                            <View style={styles.taskSectionItemOne}>
                                <MaterialIcons name="home-work" size={24} color="#1E90FF" />
                                <Text style={styles.sectionOneText}>{data.workShop}</Text> 
                            </View>
                            
                    </View>
                    <View style={styles.truckSection}>
                            <Text style={styles.sectionTitle}>Машина</Text> 
                            <View style={styles.truckSectionItemOne}>
                                <Feather name="truck" size={29} color="#1E90FF" />
                                <Text style={styles.sectionOneText}>{data.truck.modelName + ' ' + Moment(data.truck.makeYear).format('YYYY') }</Text>  
                            </View>
                            <View style={styles.truckSectionItemOne}>
                                <MaterialCommunityIcons name="numeric" size={29} color="#1E90FF" />
                                <Text style={styles.sectionOneText}>{data.truck.tsNumber}</Text> 
                            </View>
                            <View style={styles.truckSectionItemOne}>
                                <MaterialIcons name="miscellaneous-services" size={24} color="#1E90FF" />
                                <Text style={styles.sectionOneText}>{data.truck.inServiceCount}</Text> 
                            </View>
                    </View>
                    <View style={styles.clientSection}>
                        <Text style={styles.sectionTitle}>Клиент</Text> 
                        <View style={styles.clientSectionItemOne}>
                                <Fontisto name="person" size={23} color="#1E90FF" />
                                <Text style={styles.sectionOneText}>Александр</Text> 
                        </View>
                        <View style={styles.clientSectionItemOne}>
                                <MaterialCommunityIcons name="office-building" size={24} color="#1E90FF" />
                                <Text style={styles.sectionOneText}>ООО Строй-Ком</Text> 
                        </View>
                        <View style={styles.clientSectionItemOne}>
                                <MaterialIcons name="email" size={24} color="#1E90FF" />
                                <Text style={styles.sectionOneText}>sales@stroykom.ru</Text> 
                        </View>
                        <View style={styles.clientSectionItemOne}>
                                <MaterialIcons name="local-phone" size={24} color="#1E90FF" />
                                <Text style={styles.sectionOneText}>+7 920 346 02-62</Text> 
                        </View>
                    </View>
                    <View style={styles.actionContainer}>
                            <Button title="Удалить" style={styles.btnDelete} />
                    </View>
                </ScrollView>
           </SafeAreaView>
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
    taskSection: {
        alignItems: 'baseline',
        paddingLeft: 50,
        paddingTop: 30,
        borderBottomColor: '#AEB6BF',
        borderBottomWidth: StyleSheet.hairlineWidth
      
    },
    taskSectionItemOne: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingBottom: 10
     
    }, 
    sectionOneText: {
        textAlignVertical: 'center',
        paddingLeft: 10
    }, 
    truckSection: {
        alignItems: 'baseline',
        paddingLeft: 50,
        paddingTop: 10,
        borderBottomColor: '#AEB6BF',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    truckSectionItemOne: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingBottom: 10
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },  
    clientSection: {
        alignItems: 'baseline',
        paddingLeft: 50,
        paddingTop: 10,
        borderBottomColor: '#AEB6BF',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    clientSectionItemOne: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingBottom: 10
    },
    actionContainer: {
       paddingTop: 10,
       paddingBottom: 10,
       alignItems: 'center'
    },  
    scrollViewContainer: {
       
    },
    scrollView: {
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },
    btnDelete: {
        backgroundColor: '#EC7063',
        width: '70%',
        padding: 10
      
    }
    
});