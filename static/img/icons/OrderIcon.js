import React from 'react';
import { Svg, Path } from 'react-native-svg';

const OrderIcon = ({ color }) => {
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
      <Path
        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
        stroke={color}
      />
      <Path
        d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"
        stroke={color}
      />
      <Path d="M12 11h4" stroke={color} />
      <Path d="M12 16h4" stroke={color} />
      <Path d="M8 11h.01" stroke={color} />
      <Path d="M8 16h.01" stroke={color} />
    </Svg>
  );
};

export default OrderIcon;
