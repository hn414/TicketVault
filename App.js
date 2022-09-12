import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text,TextInput, TouchableOpacity, View  } from 'react-native';
import icon from './assets/icon.png'; 
import concert from './assets/concert.png'
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const App = () => {
  const [input, setOutputText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const itemInputHandler = (enteredText) => {
    setOutputText(enteredText);}

  const calTicket = () => {
    setSubmittedText((input * 99.99).toFixed(2));
    }
  return(
    <View style={styles.container}>
      <Text style={styles.head}>Ticket Vault</Text>
      <TextInput 
        style={styles.input}
        placeholder="Number of Tickets"
        onChangeText = {itemInputHandler}
        value = {input}
      />

    <TouchableOpacity style={styles.button}  onPress={calTicket}>
      <Text style={styles.buttonText}>Find The Cost</Text>
    </TouchableOpacity>
  
    {submittedText ?
    <Text style={styles.output}> Ticket Cost: ${submittedText} </Text>
    : 
    <Text>
    </Text>
    }
    
    <Image source={concert} style={styles.concert} />
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  concert:{
    width: 449, 
    height: 218, 
    marginTop:20,
  },
  head:{
    
    fontSize: 46,
    alignItems: 'center',
    marginBottom: 10,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'gray',
    marginBottom: 10,
    marginTop: 10,
  },
  button:{
    height: 50,
    width: 150,
    alignItems: "center",
    backgroundColor:'#f98b88',
    borderWidth: 1,
    margin: 20,
  },
  buttonText: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  output: {
    padding: 10,
    fontSize: 40,
  },
});
export default App;




