import React from 'react';
import { Platform, StyleSheet, Text, TextProps } from 'react-native';

function AppText({ children, style }: TextProps) {
  return (
    <Text style={[styles.text, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18, 
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  }
})

export default AppText;
