import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';
import { Dispatch } from 'react';

type HexToRGBProps = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
};

const HexToRGB = ({ hexColor, dispatch }: HexToRGBProps) => {
  const color = hex.rgb(hexColor);
  const [r, g, b] = color;

  const updateRGB = ({ red = r, green = g, blue = b }) => {
    dispatch({
      type: 'update-rgb-color',
      payload: { rbg: [red, green, blue] },
    });
  };

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="R"
        type="number"
        value={r}
        onChange={(e) =>
          updateRGB({ red: e.target.valueAsNumber, green: g, blue: b })
        }
      />
      <LabeledInput
        label="G"
        type="number"
        value={g}
        onChange={(e) =>
          updateRGB({ red: r, green: e.target.valueAsNumber, blue: b })
        }
      />
      <LabeledInput
        label="B"
        type="number"
        value={b}
        onChange={(e) =>
          updateRGB({ red: r, green: g, blue: e.target.valueAsNumber })
        }
      />
    </section>
  );
};

export default HexToRGB;
