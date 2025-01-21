import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colors } from '@/constants/colors';

interface Props {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onPress: () => void;
}

const AppButton: React.FC<Props> = ({ children, variant = 'primary', onPress }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: colors[variant] }]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 5,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
})

export default AppButton;
