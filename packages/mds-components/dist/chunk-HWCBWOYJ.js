"use client";
import {
  MDSButton
} from "./chunk-VJKUWQX5.js";
import {
  MDSText
} from "./chunk-YIZUHDZP.js";
import {
  MDSIcon
} from "./chunk-PEONUTKF.js";

// src/MDSCard/MDSCard.tsx
import "react";
import { useRender } from "@base-ui-components/react/use-render";

// src/MDSCard/MDSCard.module.css
var MDSCard_default = {
  root: "MDSCard_root",
  media: "MDSCard_media",
  overlay: "MDSCard_overlay",
  content: "MDSCard_content",
  header: "MDSCard_header",
  headerText: "MDSCard_headerText",
  headline: "MDSCard_headline",
  tag: "MDSCard_tag",
  body: "MDSCard_body",
  actions: "MDSCard_actions"
};

// src/MDSCard/MDSCard.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function MDSCardRoot({
  children,
  media,
  imageAlignment = "top",
  background = "standard",
  outline = false,
  interactive = false,
  selected = false,
  overlay,
  render,
  className,
  ...props
}) {
  const hasMedia = media != null;
  const tabIndexProp = interactive && render == null && props.tabIndex == null ? { tabIndex: 0 } : null;
  return useRender({
    render: render ?? /* @__PURE__ */ jsx("div", {}),
    props: {
      ...props,
      ...tabIndexProp,
      className: [MDSCard_default.root, className].filter(Boolean).join(" "),
      "data-background": background,
      // Secondary surface: switch the card's region to the `subtle` palette
      // so `--mds-colours-basic-background` resolves to the section's
      // subtle background (and hover/pressed states follow automatically).
      // See conventions/tokens-policy and theming/section in the vault.
      "data-section": background === "secondary" ? "subtle" : void 0,
      "data-image-alignment": imageAlignment,
      "data-has-media": hasMedia || void 0,
      "data-outline": outline || void 0,
      "data-interactive": interactive || void 0,
      "data-selected": selected || void 0,
      "aria-pressed": interactive && selected ? true : void 0,
      children: hasMedia ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { className: MDSCard_default.media, "data-slot": "media", children: [
          media,
          overlay != null && /* @__PURE__ */ jsx("div", { className: MDSCard_default.overlay, "data-slot": "overlay", children: overlay })
        ] }),
        /* @__PURE__ */ jsx("div", { className: MDSCard_default.content, "data-slot": "content", children })
      ] }) : children
    }
  });
}
MDSCardRoot.displayName = "MDSCard";
function MDSCardHeader({
  children,
  tag,
  onClose,
  closeLabel = "Close",
  as = "h2",
  className,
  ...props
}) {
  const HeadingTag = as;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ...props,
      className: [MDSCard_default.header, className].filter(Boolean).join(" "),
      "data-slot": "header",
      children: [
        /* @__PURE__ */ jsxs("div", { className: MDSCard_default.headerText, "data-slot": "header-text", children: [
          tag != null && /* @__PURE__ */ jsx("span", { className: MDSCard_default.tag, "data-slot": "tag", children: /* @__PURE__ */ jsx(MDSText, { variant: "body-bold", children: tag }) }),
          /* @__PURE__ */ jsx(
            MDSText,
            {
              variant: "h2",
              render: /* @__PURE__ */ jsx(HeadingTag, {}),
              className: MDSCard_default.headline,
              children
            }
          )
        ] }),
        onClose != null && /* @__PURE__ */ jsx(
          MDSButton,
          {
            variant: "ghost",
            size: "small",
            iconOnly: true,
            "aria-label": closeLabel,
            icon: /* @__PURE__ */ jsx(MDSIcon, { name: "x", size: "small" }),
            onClick: onClose,
            "data-slot": "close"
          }
        )
      ]
    }
  );
}
MDSCardHeader.displayName = "MDSCard.Header";
function MDSCardBody({ className, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ...props,
      className: [MDSCard_default.body, className].filter(Boolean).join(" "),
      "data-slot": "body",
      children: /* @__PURE__ */ jsx(MDSText, { variant: "body", children })
    }
  );
}
MDSCardBody.displayName = "MDSCard.Body";
function MDSCardActions({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ...props,
      className: [MDSCard_default.actions, className].filter(Boolean).join(" "),
      "data-slot": "actions",
      children
    }
  );
}
MDSCardActions.displayName = "MDSCard.Actions";
var MDSCard = Object.assign(MDSCardRoot, {
  Header: MDSCardHeader,
  Body: MDSCardBody,
  Actions: MDSCardActions
});

export {
  MDSCardHeader,
  MDSCardBody,
  MDSCardActions,
  MDSCard
};
//# sourceMappingURL=chunk-HWCBWOYJ.js.map