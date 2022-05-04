
import { Svg, Line, Circle } from 'react-native-svg';

const MoreIcon = () => {

    return (
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#CCC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Circle cx="12" cy="12" r="10" />
          <Line x1="12" y1="16" x2="12" y2="12" />
          <Line x1="12" y1="8" x2="12.01" y2="8" />
        </Svg>
    )
}

export default MoreIcon;