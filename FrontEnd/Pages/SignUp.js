/* Libraries */
import React, { useState } from "react";
import { StyleSheet, Text, View,ImageBackground,Dimensions,TextInput,Button,Alert } from 'react-native';
import { StackActions } from "@react-navigation/native";
/* Variables & functions */
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

/* main function */
export default function SignUp({navigation}){

  /* UseState and UseEffect */
  const [Name,setName] = useState(null);
  const [Email,setEmail] = useState(null);
  const [Password,setPassword] = useState(null);
  const [Gender,setGender] = useState(null);

  /* functions */
  function Auth(){
    if(Name == null || Email == null || Password == null || Gender == null){
      return false;
    }else{
      return true;
    }
  }
  /* main function */
    return(
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <ImageBackground source={require('../images/login.png')}  style={styles.image}>
        <View style={styles.textList}>
          <TextInput style={styles.textInput} placeholder='Enter your Name' onChangeText={(val) => setName(val)} />
          <TextInput style={styles.textInput} placeholder='Enter your E-mail ID' onChangeText={(val) => setEmail(val)} />
          <TextInput style={styles.textInput} placeholder='Enter your password' onChangeText={(val) => setPassword(val)} />
          <TextInput style={styles.textInput} placeholder='Enter your gender' onChangeText={(val) => setGender(val)} />
          <View style={styles.spacing}></View>
          <Button title='SignUp' onPress={()=>{
            if (Auth()) {
              navigation.dispatch(
                StackActions.replace("Home")
              );
            }else{
              Alert.alert("Warning","Enter correct details");
            }
          }}/>
          <View style={styles.spacing}></View>
          <Text style={styles.text}>Already have account ?</Text>
          <View style={styles.spacing}></View>
          <Button title='Signin' onPress={()=>navigation.navigate('Login')}/>
        </View>
      </ImageBackground>
    </View>
    );
}

const styles = StyleSheet.create({
    text: {
      color: '#FFFFFF',
      fontSize: 18,
    },
    image: {
      width:screenWidth,
      height:screenHeight,
    },
    title: {
      marginTop: '30%',
      textAlign: 'center',
      fontWeight: '500',
      fontSize: 30,
      alignItems: 'center',
      alignContent: 'center',
    },
    textInput: {
      height: '10%',
      width: '60%',
      backgroundColor: '#FFFFFF',
      alignSelf:'center',
      marginBottom: '5%',
      borderColor: '#000000',
      borderWidth: 1,
      borderRadius: 50,
      paddingStart: 20,
    },
    buttons:{
      width: '50%',
      borderRadius: 50,
    },
    spacing: {
      marginTop: '5%',
    },
    textList:{
      paddingTop: '20%',
      alignItems: 'center',
      alignContent: 'center',
    },
    container:{
      height:'100%',
      width: '100%',
    }
  });
  