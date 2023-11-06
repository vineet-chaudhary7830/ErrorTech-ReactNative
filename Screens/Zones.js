import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function Zones() {
  return (
    <View>
      <View style={styles.zones}>
                <Text style={styles.zonesText}>All Zones</Text>
                <AntDesign name="arrowdown" size={24} color="#2B58BC" />
            </View>

            <View style={styles.zones}>
                <Text style={styles.zonesText}>Test Length - 2 hours</Text>
                <AntDesign name="arrowdown" size={24} color="#2B58BC" />
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    zones: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 30,
        width: '90%',
        backgroundColor: '#fff',
        marginTop: 10,
        marginLeft: 20,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 10,
        borderRadius: 20,
    }, zonesText: {
        fontWeight: '500'
    },
})