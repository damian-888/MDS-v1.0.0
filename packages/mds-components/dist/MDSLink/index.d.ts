import * as React from 'react';
import { useRender } from '@base-ui-components/react/use-render';

type MDSLinkAlignment = 'left' | 'center' | 'right';
interface MDSLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
    /** Visible link label. */
    children: React.ReactNode;
    /**
     * Cross-axis alignment of the link inside its tappable area.
     * Mirrors Figma's `Alignment=Left | Center | Right` variants.
     * @default 'left'
     */
    alignment?: MDSLinkAlignment;
    /**
     * Trailing icon node. Defaults to an arrow-right glyph matching the
     * Figma "arrow-right" frame. Pass `null` to omit the icon entirely.
     * @default <MDSIcon name="arrow-right" size="small" />
     */
    icon?: React.ReactNode | null;
    /**
     * Render the link using a different element. Defaults to `<a>` — pass
     * `render={<Link to="…" />}` (or any framework router primitive) to
     * keep the styling while swapping the underlying tag.
     */
    render?: useRender.RenderProp<React.AnchorHTMLAttributes<HTMLAnchorElement>>;
}
declare function MDSLink({ alignment, icon, render, className, children, ...props }: MDSLinkProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
declare namespace MDSLink {
    var displayName: string;
}

export { MDSLink, type MDSLinkAlignment, type MDSLinkProps };
