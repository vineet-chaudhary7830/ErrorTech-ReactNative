import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function Juice() {
  return (
    <View style={styles.juiceView}>
    <Text style={styles.juiceText}>Jesse's Juice Bar</Text>
    <AntDesign name="arrowdown" size={24} color="#2B58BC" />
</View>
  )
}

const styles = StyleSheet.create({
    juiceView: {
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
    }, juiceText: {
        marginLeft: 20,
        fontWeight: '400',
        color: '#000',
        fontSize: 15,
    },
})