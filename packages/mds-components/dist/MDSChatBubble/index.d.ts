import * as React from 'react';
import { useRender } from '@base-ui-components/react/use-render';

type MDSChatBubbleAlignment = 'incoming' | 'outgoing';
type MDSChatBubbleBackground = 'standard' | 'secondary';
type MDSChatBubbleType = 'message' | 'media' | 'loading';
interface MDSChatBubbleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    /** Conversation side. Drives layout direction and the flat-corner side. */
    alignment: MDSChatBubbleAlignment;
    /**
     * Bubble fill.
     * - `'standard'` (default) — `--mds-colours-basic-background`.
     * - `'secondary'` — `--mds-colours-basic-accent-secondary`.
     */
    background?: MDSChatBubbleBackground;
    /**
     * Content layout.
     * - `'message'` (default) — bubble wraps the children as a text message.
     * - `'media'` — bubble is a 260×260 frame; children fill it (image, video, etc.).
     * - `'loading'` — bubble shows a spinning brand mark, children are ignored.
     */
    type?: MDSChatBubbleType;
    /**
     * Avatar slot — typically a 24px round `<MDSImage />`. Only rendered for
     * incoming bubbles; outgoing messages omit the avatar per Figma.
     */
    avatar?: React.ReactNode;
    /**
     * Timestamp rendered below the bubble in microcopy / text-secondary. Pass
     * a plain string ("12:00") or a custom node for richer markup.
     */
    timestamp?: React.ReactNode;
    /**
     * Bubble content. For `type="message"` this is the body text; for
     * `type="media"` this is the image/video node; for `type="loading"`
     * this prop is ignored.
     */
    children?: React.ReactNode;
    /**
     * Render the bubble row using a different element. Defaults to `<div>`.
     */
    render?: useRender.RenderProp<React.HTMLAttributes<HTMLDivElement>>;
}
declare function MDSChatBubble({ alignment, background, type, avatar, timestamp, children, render, className, ...props }: MDSChatBubbleProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
declare namespace MDSChatBubble {
    var displayName: string;
}

export { MDSChatBubble, type MDSChatBubbleAlignment, type MDSChatBubbleBackground, type MDSChatBubbleProps, type MDSChatBubbleType };
