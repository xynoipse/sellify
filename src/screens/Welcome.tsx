import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import AppButton from '@/components/button';
import { colors } from '@/constants/colors';

function Welcome() {
  return (
    <ImageBackground 
      style={styles.background}
      source={require('../assets/background.jpg')}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image 
          style={styles.logo}
          source={require('../assets/logo.png')} 
        />
        <Text style={styles.tagline}>Sell and Simplify</Text>
      </View>
      <View style={styles.actionsContainer}>
        <AppButton 
          onPress={() => null}
        >
          Login
        </AppButton>
        <AppButton 
          variant="secondary"
          onPress={() => null}
        >
          Register
        </AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagline: {
    color: colors.white,
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
  logo: {
    width: 135,
    height: 135,
  },
  actionsContainer: {
    padding: 20,
    width: '100%',
  },
});

export default Welcome;
