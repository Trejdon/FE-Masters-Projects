import clsx from 'clsx';
import { ChangeEventHandler, ComponentPropsWithRef, useId } from 'react';

type LabeledInputProps = ComponentPropsWithRef<'input'> & {
  label: string;
};

const LabeledInput = ({
  label,
  id,
  className,
  onChange,
  ...props
}: LabeledInputProps) => {
  id = useId() + id;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        onChange={onChange}
        className={clsx('w-full', className)}
        readOnly={!onChange}
        {...props}
      />
    </div>
  );
};

export default LabeledInput;
