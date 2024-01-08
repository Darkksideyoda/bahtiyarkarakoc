import { Chip } from '@nextui-org/react';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Typography from '../Typography/Typography';
import { StackChipProps } from './helpers';

function StackChip(props: StackChipProps) {
  const { color = 'primary', icon: IconComponent, title } = props;
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1600 });

  return (
    <Chip
      color={color}
      startContent={<IconComponent size={isTabletOrMobile ? 10 : 16} />}
      className="mx-1 select-none p-1 lg:mx-4 lg:p-4"
      classNames={{
        base: color
      }}
      size={isTabletOrMobile ? 'sm' : 'lg'}
      variant="bordered"
    >
      <Typography variant={isTabletOrMobile ? 'caption' : 'body1'}>{title}</Typography>
    </Chip>
  );
}

export default StackChip;
