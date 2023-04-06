import { rgb } from 'color-convert';

export type UpdateColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

export type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: { rbg: [number, number, number] };
};

type ColorState = {
  hexColor: string;
};

export const initialState: ColorState = {
  hexColor: '#BADA55',
};

export const colorReducer = (
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

  return state;
};
