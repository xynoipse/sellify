import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import tw from '@/lib/tailwind';

interface Props {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  onPress: () => void;
}

const AppButton: React.FC<Props> = ({ children, variant = 'primary', onPress }) => {
  return (
    <TouchableOpacity 
      style={{
        ...tw`rounded-full items-center justify-center p-4 my-1.5 w-full`,
        ...(variant === 'primary' && tw`bg-primary`),
        ...(variant === 'secondary' && tw`bg-secondary`),
        ...(variant === 'danger' && tw`bg-danger`),
      }} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={tw`text-white text-lg font-bold uppercase`}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;
