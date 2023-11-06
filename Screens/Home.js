import { View, Text, TextInput, Button, Pressable } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'


import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Juice from './Juice';
import Input from './Input';
import BlueContainer from './BlueContainer';
import Zones from './Zones';

export default function Home(props) {
    const { onPress, title = 'Place On Test' } = props;

    return (
        <View style={styles.container} >
            <View style={styles.test}>
                <Text style={styles.testText} >Test Device</Text>
            </View>
            <View style={styles.notOnTestView}>
                <FontAwesome name="dot-circle-o" size={18} color="red" />
                <Text style={styles.notOnTestText}>Not on Test</Text>
            </View>

            <Juice />
            <BlueContainer />
            <Zones />
            <Input />
            <Pressable style={styles.button} onPress={() => alert('button clicked')}>
                <Text style={styles.buttonText}>{title}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    // linearGradient: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     borderRadius: 5,
    //     height: 200,
    //     width: 350,
    //   },
    container: {
        flex: 1,
        backgroundColor: '#f4f6f9'
    }, test: {
        marginTop: 100,

    }, testText: {
        marginLeft: 20,
        fontSize: 30,
        fontWeight: 'bold',
    }, notOnTestView: {
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 25,
        borderWidth: 1,
        width: 110,
        borderColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingRight: 5,
        paddingBottom: 3,
        paddingTop: 3,
    }, notOnTestText: {
        color: 'red',
    },
    button: {
        width: 240,
        marginLeft: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: '#2B58BC',
    }, buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});
