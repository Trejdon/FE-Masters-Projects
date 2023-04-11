import clsx from 'clsx';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: string;
  size?: string;
};

const Button = ({
  variant,
  size,
  className,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={clsx(variant, size, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
