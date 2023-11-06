import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import Juice from './Juice'
import BlueContainer from './BlueContainer'

export default function Contact() {
  return (
    <View style={styles.container}>
       <View style={styles.test}>
                <Text style={styles.testText} >Contact For Device</Text>
            </View>
            
            <Juice />
            <BlueContainer />

            <View>
                <Text style={{color:'grey',marginTop:30,marginLeft:20,marginBottom:20}}>PHONE</Text>
                <View style={styles.phone}>
                    <View >
                 
                    <View>
                        <Text  style={styles.phoneMain}>JESSIE BROWN</Text>
                        <Text style={{color:'grey'}}>(555) 44 12 34</Text>
                    </View>
                    </View>
                    <View style={styles.hr}></View>
                    <View>
                    <Text style={styles.phoneMain}>JOHN SMITH1</Text>
                        <Text style={{color:'grey'}}>(555) 44 12 34</Text>
                    </View>
                </View>
            </View>
    </View>
  )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f6f9'
    }, test: {
        marginTop: 100,

    }, testText: {
        marginLeft: 20,
        fontSize: 30,
        fontWeight: 'bold',
    },phone:{
        backgroundColor:'#fff',
        paddingTop:10,
        paddingBottom:10,
        marginLeft:20,
        paddingLeft:30,
        
        width:'90%',
        borderRadius:4
    },phoneMain:{
        fontWeight:'500',
        fontSize:15,
        marginBottom:5,
    },hr: {
        marginTop:10,
        marginBottom:10,
        backgroundColor: '#f4f6f9',
        height: 2,
    }
})