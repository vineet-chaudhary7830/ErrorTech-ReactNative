import { View, StyleSheet ,TextInput} from 'react-native'
import React from 'react'

export default function Input() {
  return (
    <View>
                <TextInput placeholder='Comment' style={styles.comment}></TextInput>
                <TextInput placeholder='Passcode*' style={styles.passcode}></TextInput>
            </View>
  )
}

const styles = StyleSheet.create({
    comment: {
        marginLeft: 15,
        backgroundColor: '#fff',
        height: 40, width: '90%',
        marginTop: 10,
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: 'grey'
    }, passcode: {
        marginLeft: 15,
        backgroundColor: '#fff',
        height: 40, width: '90%',
        marginTop: 10,
        borderRadius: 20,
        marginBottom: 10,
        borderWidth: 0.5,
        borderColor: 'grey'
    },
})