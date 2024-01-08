import classnames from 'classnames';
import React from 'react';

interface TypographyProps {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'srOnly'
    | 'inherit';
  className?: string;
  fontStyle?: 'normal' | 'italic';
  fontWeight?: 'normal' | 'bold' | 'semibold';
  color?: string;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  className,
  color,
  fontStyle = 'normal',
  fontWeight = 'normal',
  variant
}) => {
  const getFontSize = () => {
    switch (variant) {
      case 'h1':
        return 'text-2xl xl:text-5xl';
      case 'h2':
        return 'text-3xl sm:text-4xl';
      case 'h3':
        return 'text-base xl:text-2xl ';
      case 'h4':
        return 'text-xl sm:text-2xl';
      case 'h5':
        return 'text-lg sm:text-xl';
      case 'h6':
        return 'text-base sm:text-lg';
      case 'subtitle1':
        return 'text-lg sm:text-base';
      case 'subtitle2':
        return 'text-base';
      case 'body1':
        return 'text-base sm:text-lg';
      case 'body2':
        return 'text-sm sm:text-base';
      case 'caption':
        return 'text-xs';
      case 'button':
        return 'text-base sm:text-lg';
      case 'overline':
        return 'text-xs uppercase tracking-wide';
      case 'srOnly':
        return 'sr-only';
      case 'inherit':
      default:
        return '';
    }
  };

  const classes = classnames(`font-${fontWeight}`, getFontSize(), fontStyle, `${color}`, className);

  return <div className={classes}>{children}</div>;
};

export default Typography;
