import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';

import ControlButtons from './components/ControlButtons';
import PhoneKeyboardButton from './components/PhoneKeyboardButton';

export default function App() {
  const [number, setNumber] = useState([]);
  const addNumber = (nb) => {
      setNumber([...number, nb]);
  };
  const backNumber = () => {
    let temp = [...number]
    temp.pop()
    setNumber(temp)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.inputText}>{number}</Text>
      <View style={styles.keyboard}>

        <PhoneKeyboardButton buttonText="1" buttonTextLetters="" onClick={addNumber}/>
        <PhoneKeyboardButton buttonText="2" buttonTextLetters="ABC"   onClick={addNumber}/>
        <PhoneKeyboardButton buttonText="3" buttonTextLetters="DEF"  onClick={addNumber}/>
        <PhoneKeyboardButton buttonText="4" buttonTextLetters="GHI" onClick={addNumber}/>
        <PhoneKeyboardButton buttonText="5" buttonTextLetters="JKL"   onClick={addNumber}/>
        <PhoneKeyboardButton buttonText="6" buttonTextLetters="MNO"  onClick={addNumber}/>
        <PhoneKeyboardButton buttonText="7" buttonTextLetters="PQRS"  onClick={addNumber}/>
        <PhoneKeyboardButton buttonText="8" buttonTextLetters="TUV"  onClick={addNumber}/>
        <PhoneKeyboardButton buttonText="9" buttonTextLetters="WXYZ"  onClick={addNumber}/>
        <PhoneKeyboardButton buttonText="*" buttonTextLetters=""  onClick={addNumber}/>
        <PhoneKeyboardButton buttonText="0" buttonTextLetters="+"  onClick={addNumber}/>
        <PhoneKeyboardButton buttonText="#" buttonTextLetters=""  onClick={addNumber}/>

        <ControlButtons style={styles.phoneButton} backFunction={backNumber} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
    padding: 8,
  },
  keyboard: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    color: '#FFF',
    width: '90%',
    height: 80,
    fontSize:50
  },
  phoneButton: {
    backgroundColor: '#333333',
    display: 'flex',
    width: 80,
    height: 80,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
  },
  phoneButtonText: {
    color: '#DADADA',
    fontSize: '30px',
  },
  phoneButtonLetters: {
    color: '#DADADA',
    fontSize: '10px',
    letterSpacing: '5px',
    width: '100%',
    textAlign: 'center',
  },
});
