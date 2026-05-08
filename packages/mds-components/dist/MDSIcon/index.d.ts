import * as react_jsx_runtime from 'react/jsx-runtime';
import { MDSIconProps as MDSIconProps$1, MDSIconName } from '@mds/icons';

type MDSIconSize = 'small' | 'medium' | 'large';
interface MDSIconProps extends Omit<MDSIconProps$1, 'size' | 'width' | 'height' | 'ref'> {
    /** Name of the icon in @mds/icons. Kebab-case, type-checked against the registry. */
    name: MDSIconName;
    /** Semantic size (token-driven) or an explicit pixel number. */
    size?: MDSIconSize | number;
}
declare function MDSIcon({ name, size, className, style, ...props }: MDSIconProps): react_jsx_runtime.JSX.Element;
declare namespace MDSIcon {
    var displayName: string;
}

export { MDSIcon, type MDSIconProps, type MDSIconSize };
