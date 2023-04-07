import { Dispatch } from 'react';
import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';

type HexToHSVProps = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
};

const HexToHSV = ({ hexColor, dispatch }: HexToHSVProps) => {
  const color = hex.hsv(hexColor);
  const [h, s, v] = color;

  const updateHSV = ({ hue = h, sat = s, val = v }) => {
    dispatch({
      type: 'update-hsv-color',
      payload: { hsv: [hue, sat, val] },
    });
  };

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="H"
        type="number"
        value={h}
        onChange={(e) =>
          updateHSV({ hue: e.target.valueAsNumber, sat: s, val: v })
        }
      />
      <LabeledInput
        label="S"
        type="number"
        value={s}
        onChange={(e) =>
          updateHSV({ hue: h, sat: e.target.valueAsNumber, val: v })
        }
      />
      <LabeledInput
        label="V"
        type="number"
        value={v}
        onChange={(e) =>
          updateHSV({ hue: h, sat: s, val: e.target.valueAsNumber })
        }
      />
    </section>
  );
};

export default HexToHSV;
