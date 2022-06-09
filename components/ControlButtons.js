import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import PhoneKeyboardButtonCall from './PhoneKeyboardButtonCall';
import BackButton from './BackButton';

export default function ControlButtons(props) {
  return (
    <View style={styles.controlButtons}>
        <PhoneKeyboardButtonCall />
        <BackButton backButtonMethod={props.backFunction} />
    </View>
  );
}

const styles = StyleSheet.create({
  controlButtons: {
    width:"100%",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"flex-end",
    marginTop:50
  },
});
