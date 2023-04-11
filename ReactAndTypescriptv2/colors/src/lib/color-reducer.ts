import { cmyk, hsl, hsv, rgb } from 'color-convert';

export type ColorState = {
  hexColor: string;
};

export const initialState: ColorState = {
  hexColor: '#BADA55',
};

const colorReducer = (
  state: ColorState = initialState,
  action: AdjustColorActions,
) => {
  if (action.type === 'update-hex-color') {
    const { hexColor } = action.payload;
    return { ...state, hexColor };
  }
  if (action.type === 'update-rgb-color') {
    const hexColor = '#' + rgb.hex(action.payload.rbg);
    return { ...state, hexColor };
  }
  if (action.type === 'update-hsl-color') {
    const hexColor = '#' + hsl.hex(action.payload.hsl);
    return { ...state, hexColor };
  }
  if (action.type === 'update-hsv-color') {
    const hexColor = '#' + hsv.hex(action.payload.hsv);
    return { ...state, hexColor };
  }
  if (action.type === 'update-cmyk-color') {
    const hexColor = '#' + cmyk.hex(action.payload.cmyk);
    return { ...state, hexColor };
  }

  return state;
};

export default colorReducer;
