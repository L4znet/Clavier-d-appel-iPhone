import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function PhoneKeyboardButton(props) {
  return (
    <TouchableOpacity style={styles.phoneButton} onPress={() => {
            props.backButtonMethod()
          }}>
      <AntDesign name="close" size={24} color="white" />
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
});
