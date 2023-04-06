type UpdateColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: { rbg: [number, number, number] };
};

type AdjustColorActions = UpdateColorAction | UpdateRGBColorAction;
