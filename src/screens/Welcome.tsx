import React from 'react';
import { Image, ImageBackground, View } from 'react-native';

import AppButton from '@/components/button';
import AppText from '@/components/text';
import tw from '@/lib/tailwind';

function Welcome() {
  return (
    <ImageBackground 
      style={tw`flex-1 justify-end items-center`}
      source={require('../assets/background.jpg')}
      blurRadius={10}
    >
      <View style={tw`absolute top-[70px] items-center`}>
        <Image 
          style={tw`w-36 h-36`}
          source={require('../assets/logo.png')} 
        />
        <AppText style={tw`text-white text-[25px] py-3 font-bold`}>
          Sell and Simplify
        </AppText>
      </View>
      <View style={tw`w-full p-5`}>
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

export default Welcome;
