import ColorChangeSwatch from '../shared/color-change-swatch';

type RelatedColorPaletteProps = {
  title: string;
  hexColors: string[];
  handleClick: Function;
};

const RelatedColorPalette = ({
  title,
  hexColors,
  handleClick,
}: RelatedColorPaletteProps) => {
  return (
    <section>
      <h3 className="mb-4">{title}</h3>
      <div className="grid grid-cols-3 gap-2">
        {hexColors.map((hexColor) => {
          return (
            <ColorChangeSwatch
              key={hexColor}
              hexColor={hexColor}
              className="w-full h-full"
              onClick={() => handleClick(hexColor)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RelatedColorPalette;
