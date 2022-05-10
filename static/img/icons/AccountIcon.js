import React from 'react';
import { Svg, Circle, Path } from 'react-native-svg';

const AccountIcon = ({ color }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke={color} />
      <Circle cx="12" cy="7" r="4" stroke={color} />
    </Svg>
  );
};

export default AccountIcon;
