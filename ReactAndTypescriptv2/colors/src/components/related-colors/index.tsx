import { Dispatch } from 'react';
import {
  getComplementColors,
  getTriadColors,
} from '../../lib/get-related-colors';
import RelatedColorPalette from './related-color-palette';

type RelatedColorsProps = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
};

const RelatedColors = ({ hexColor, dispatch }: RelatedColorsProps) => {
  const triadColors = getTriadColors(hexColor);
  const complementColors = getComplementColors(hexColor);

  const updateHex = (hex = hexColor) => {
    dispatch({
      type: 'update-hex-color',
      payload: { hexColor: hex },
    });
  };

  return (
    <>
      <RelatedColorPalette
        title="Triad Colors"
        hexColors={triadColors}
        handleClick={updateHex}
      />
      <RelatedColorPalette
        title="Complimentary Colors"
        hexColors={complementColors}
        handleClick={updateHex}
      />
    </>
  );
};

export default RelatedColors;
