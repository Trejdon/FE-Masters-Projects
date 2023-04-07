import { Dispatch } from 'react';
import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';

type HexToCMYKProps = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
};

const HexToCMYK = ({ hexColor, dispatch }: HexToCMYKProps) => {
  const color = hex.cmyk(hexColor);
  const [c, m, y, k] = color;

  const updateCMYK = ({ cyan = c, mag = m, yel = y, key = k }) => {
    dispatch({
      type: 'update-cmyk-color',
      payload: { cmyk: [cyan, mag, yel, key] },
    });
  };

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="C"
        type="number"
        value={c}
        onChange={(e) =>
          updateCMYK({ cyan: e.target.valueAsNumber, mag: m, yel: y, key: k })
        }
      />
      <LabeledInput
        label="M"
        type="number"
        value={m}
        onChange={(e) =>
          updateCMYK({ cyan: c, mag: e.target.valueAsNumber, yel: y, key: k })
        }
      />
      <LabeledInput
        label="Y"
        type="number"
        value={y}
        onChange={(e) =>
          updateCMYK({ cyan: c, mag: m, yel: e.target.valueAsNumber, key: k })
        }
      />
      <LabeledInput
        label="K"
        type="number"
        value={k}
        onChange={(e) =>
          updateCMYK({ cyan: c, mag: m, yel: y, key: e.target.valueAsNumber })
        }
      />
    </section>
  );
};

export default HexToCMYK;
