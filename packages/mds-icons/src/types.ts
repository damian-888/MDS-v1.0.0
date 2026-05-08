import type { SVGProps } from 'react';

export interface MDSIconProps extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> {
  size?: string | number;
  title?: string;
  titleId?: string;
}
