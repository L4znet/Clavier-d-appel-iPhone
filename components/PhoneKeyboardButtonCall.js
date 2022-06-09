import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function PhoneKeyboardButtonCall(props) {
  return (
    <TouchableOpacity style={styles.phoneButton}>
      <Text style={styles.phoneButtonText}><FontAwesome name="phone" size={35} color="white" /></Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  phoneButton: {
    backgroundColor: '#2ED158',
    display: 'flex',
    width: 80,
    height: 80,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:14
  },
  phoneButtonText: {
    color: '#FFF',
    fontSize: '60px',
  },
});
