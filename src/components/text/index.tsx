import React from 'react';
import { Text, TextProps } from 'react-native';

import tw from '@/lib/tailwind';

const AppText: React.FC<TextProps> = (props) => {
  return (
    <Text
      {...props}
      style={{
        ...tw`text-base font-normal text-black`,
        ...props.style as object
      }}
    />
  )
}

export default AppText;
