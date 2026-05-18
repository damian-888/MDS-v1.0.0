import * as React from 'react';
import { useRender } from '@base-ui-components/react/use-render';

type MDSImageObjectFit = 'cover' | 'contain';
interface MDSImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'children'> {
    /** Image URL — required. */
    src: string;
    /** Required accessible description. Pass an empty string for decorative images. */
    alt: string;
    /**
     * Aspect ratio applied to the wrapping box. Accepts any valid CSS
     * `aspect-ratio` value: a unitless number (`1.5`), a string ratio (`'16/9'`),
     * or `auto` to let the image's intrinsic ratio drive the layout.
     * Default: `'16/9'`. Ignored when `fill` is true.
     */
    aspectRatio?: string | number;
    /**
     * How the image fills its box.
     * - `'cover'` (default) — fills the box, cropping any overflow.
     * - `'contain'` — fits inside the box, letterboxing if needed.
     */
    objectFit?: MDSImageObjectFit;
    /**
     * Fill the parent box on both axes. When true, the `aspectRatio` prop is
     * ignored and the image uses `height: 100%` plus the base `width: 100%`,
     * with `aspect-ratio: auto`. Useful inside fixed-shape wells (e.g.
     * `MDSCard` side-aligned variants). Note: a consumer-supplied
     * `style={{ aspectRatio }}` will still take effect via inline-style
     * specificity — pass `aspectRatio` via the prop instead.
     */
    fill?: boolean;
    /**
     * Render the image element using a different element/component
     * (e.g. a router-aware `<Image />`). Defaults to `<img>`.
     */
    render?: useRender.RenderProp<React.ImgHTMLAttributes<HTMLImageElement>>;
}
declare function MDSImage({ src, alt, aspectRatio, objectFit, fill, render, className, style, ...props }: MDSImageProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
declare namespace MDSImage {
    var displayName: string;
}

export { MDSImage, type MDSImageObjectFit, type MDSImageProps };
