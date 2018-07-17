import React, {Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';

export default class LoginForm extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <TextInput style={styles.input} 
                    placeholder="Username or Email"
                    returnKeyType="next"
                    onSubmitEditing={()=> this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    />
                <TextInput style={styles.input} placeholder="Password" 
                    returnKeyType="go"
                    ref={(input)=> this.passwordInput = input}
                    secureTextEntry/>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>

                </TouchableOpacity>

            </View>


        );
        
    }

}
const styles = StyleSheet.create({
    container: {
      padding: 20
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.2)',
        marginBottom: 15,
        color:'#FFF',
        paddingHorizontal:10
    
    },
    buttonContainer:{
        backgroundColor:'#2980b9',
        height:40,
        paddingVertical: 5
    },
    buttonText:{
        textAlign:'center',
        color:'#FFF',
        fontWeight:'800',
        fontSize: 20

    }
});
  