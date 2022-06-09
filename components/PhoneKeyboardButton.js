import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
export default function PhoneKeyboardButton(props) {

  return (
    <TouchableOpacity style={styles.phoneButton} onPress={() => props.onClick(props.buttonText)}>
      <Text style={styles.phoneButtonText}>
        {props.buttonText}
      </Text>
      <Text style={styles.phoneButtonLetters}>
        {props.buttonTextLetters}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  phoneButton: {
    backgroundColor:'#333333',
    display:"flex",
    width:80,
    height:80,
    borderRadius:"50%",
    justifyContent:"center",
    alignItems:"center",
    margin:6
  },
  phoneButtonText:{
    color:"#DADADA",
    fontSize:"30px"
  },
  phoneButtonLetters:{
    color:"#DADADA",
    fontSize:"10px",
    letterSpacing:"5px",
    width:"100%",
    textAlign:"center"
  }
});
