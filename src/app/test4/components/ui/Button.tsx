
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  ...props
}) => {
  let baseStyles = "px-6 py-3 font-bold rounded-full transition-colors duration-300";

  switch (variant) {
    case 'primary':
      baseStyles += " bg-ph-accent text-white hover:bg-blue-600";
      break;
    case 'secondary':
      baseStyles += " border border-ph-accent text-ph-accent hover:bg-ph-accent hover:text-white";
      break;
    case 'tertiary':
      baseStyles += " text-ph-accent hover:underline";
      break;
    default:
      break;
  }

  return (
    <button className={`${baseStyles} ${className || ''}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
