import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { useRender } from '@base-ui-components/react/use-render';

type MDSCardBackground = 'standard' | 'secondary';
type MDSCardImageAlignment = 'top' | 'right' | 'left';
interface MDSCardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
    /** Card content. Compose with `MDSCard.Header` / `.Body` / `.Actions` or pass any custom node. */
    children?: React.ReactNode;
    /**
     * Media slot — typically `<MDSImage … />`. Placement controlled by
     * `imageAlignment`. When omitted, the card renders content-only and the
     * root carries padding directly; when present, padding moves to the
     * content area so the image sits flush against the card edges.
     */
    media?: React.ReactNode;
    /** Position of the `media` slot. Defaults to `'top'`. */
    imageAlignment?: MDSCardImageAlignment;
    /**
     * Background variant.
     * - `'standard'` (default) — `--mds-colours-basic-background`.
     * - `'secondary'` — `--mds-colours-basic-accent-secondary`.
     */
    background?: MDSCardBackground;
    /** Stroked border using `--mds-colours-basic-stroke`. Default `false`. */
    outline?: boolean;
    /** Hover/pressed/focus-visible affordance. Default `false`. */
    interactive?: boolean;
    /** Marks the card as selected (accent stroke; `aria-pressed="true"` when also interactive). */
    selected?: boolean;
    /**
     * Absolute-positioned scrim + slot drawn on top of the media. Used for
     * chrome like a play-button overlay on a video card.
     */
    overlay?: React.ReactNode;
    /**
     * Render the card root using a different element. Defaults to `<div>`;
     * switch to `<a href />`, `<button />`, or a router `<Link />` when
     * `interactive` is true so the card is keyboard-activatable.
     */
    render?: useRender.RenderProp<React.HTMLAttributes<HTMLElement>>;
}
declare function MDSCardRoot({ children, media, imageAlignment, background, outline, interactive, selected, overlay, render, className, ...props }: MDSCardProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
declare namespace MDSCardRoot {
    var displayName: string;
}
type MDSCardHeaderHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface MDSCardHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    /** Headline content. Renders inside the chosen heading element. */
    children: React.ReactNode;
    /** Optional pill above the headline. Pass plain text or a custom node. */
    tag?: React.ReactNode;
    /** Provide a handler to render the `×` close button. */
    onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** Required accessible name for the close button when `onClose` is set. */
    closeLabel?: string;
    /** Heading level for the headline. Defaults to `'h2'`. */
    as?: MDSCardHeaderHeadingLevel;
}
declare function MDSCardHeader({ children, tag, onClose, closeLabel, as, className, ...props }: MDSCardHeaderProps): react_jsx_runtime.JSX.Element;
declare namespace MDSCardHeader {
    var displayName: string;
}
interface MDSCardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare function MDSCardBody({ className, children, ...props }: MDSCardBodyProps): react_jsx_runtime.JSX.Element;
declare namespace MDSCardBody {
    var displayName: string;
}
interface MDSCardActionsProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare function MDSCardActions({ className, children, ...props }: MDSCardActionsProps): react_jsx_runtime.JSX.Element;
declare namespace MDSCardActions {
    var displayName: string;
}
declare const MDSCard: typeof MDSCardRoot & {
    Header: typeof MDSCardHeader;
    Body: typeof MDSCardBody;
    Actions: typeof MDSCardActions;
};

export { MDSCard, MDSCardActions, type MDSCardActionsProps, type MDSCardBackground, MDSCardBody, type MDSCardBodyProps, MDSCardHeader, type MDSCardHeaderHeadingLevel, type MDSCardHeaderProps, type MDSCardImageAlignment, type MDSCardProps };
