import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function BlueContainer() {
  return (
    <View style={styles.blueConatiner}>
    <View>
        <Text style={[styles.blueConatinerText]}>ADDRESS</Text>
    </View>
    <View style={styles.location}>
        <Entypo name="location-pin" size={24} color="black" />
        <Text style={[styles.blueConatinerText]}>56 Smoothie Street Bridgewater, NJ</Text>
    </View>
    <View style={styles.hr}></View>
    <View style={styles.contact}>
        <View style={styles.blueConatinerlogo}><Feather name="phone" size={24} color="black" /></View>
        <View style={styles.blueConatinerPhone} >
            <Text style={[styles.blueConatinerText]}>(555) 99 88 88</Text>
            <Text style={[styles.blueConatinerText]}>07 57 047</Text>
        </View>
    </View>
</View>
  )
}

const styles = StyleSheet.create({
    blueConatiner: {
        marginTop: 15,
        marginLeft: 15,
        borderRadius: 15,
        height: 150,
        width: "90%",
        backgroundColor: '#377beb',
        padding: 10,
    }, hr: {
        backgroundColor: '#f4f6f9',
        height: 2,
    }, location: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-around"
    }, contact: {
        marginTop: 30,
        marginLeft: -35,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },  blueConatinerText: {
        color: '#fff'
    }, blueConatinerPhone: {
        marginLeft: -60,
    }, blueConatinerlogo: {
        paddingRight: 150,
    }
})