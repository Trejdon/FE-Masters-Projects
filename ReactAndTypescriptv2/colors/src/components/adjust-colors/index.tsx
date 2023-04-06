import { Dispatch } from 'react';
import ColorName from './color-name';
import HexToCMYK from './to-cmyk';
import HexToHSL from './to-hsl';
import HexToHSV from './to-hsv';
import HexToRGB from './to-rgb';

type AdjustColorsProps = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
};

const AdjustColors = ({ hexColor, dispatch }: AdjustColorsProps) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <h3>Adjust Colors</h3>
      <HexToRGB hexColor={hexColor} dispatch={dispatch} />
      <HexToHSL hexColor={hexColor} />
      <HexToHSV hexColor={hexColor} />
      <HexToCMYK hexColor={hexColor} />
      <ColorName hexColor={hexColor} />
    </div>
  );
};

export default AdjustColors;
