// SVGR passes jsx already annotated with ref, {...props}, <title id={titleId}>, aria-labelledby={titleId}, and svgProps attrs.
// This template provides the forwardRef wrapper, MDSIconProps typing, and a
// useId-based fallback for titleId so consumers only need to pass `title`.
export default function template({ componentName, jsx }, { tpl }) {
  return tpl`
    import { forwardRef, useId } from 'react';
    import type { MDSIconProps } from './types';

    const ${componentName} = forwardRef<SVGSVGElement, MDSIconProps>(
      ({ size = '1em', title, titleId: titleIdProp, ...props }, ref) => {
        const reactId = useId();
        const titleId = title ? (titleIdProp ?? reactId) : undefined;
        return (
          ${jsx}
        );
      }
    );
    ${componentName}.displayName = '${componentName}';

    export { ${componentName} };
  `;
}
