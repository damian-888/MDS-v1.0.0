"use client";
import {
  MDSText
} from "./chunk-YIZUHDZP.js";
import {
  MDSIcon
} from "./chunk-PEONUTKF.js";

// src/MDSChatBubble/MDSChatBubble.tsx
import "react";
import { useRender } from "@base-ui-components/react/use-render";

// src/MDSChatBubble/MDSChatBubble.module.css
var MDSChatBubble_default = {
  root: "MDSChatBubble_root",
  avatarContainer: "MDSChatBubble_avatarContainer",
  bubbleContainer: "MDSChatBubble_bubbleContainer",
  bubble: "MDSChatBubble_bubble",
  message: "MDSChatBubble_message",
  media: "MDSChatBubble_media",
  loader: "MDSChatBubble_loader",
  "MDSChatBubble-spin": "MDSChatBubble_MDSChatBubble-spin",
  timestamp: "MDSChatBubble_timestamp"
};

// src/MDSChatBubble/MDSChatBubble.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function MDSChatBubble({
  alignment,
  background = "standard",
  type = "message",
  avatar,
  timestamp,
  children,
  render,
  className,
  ...props
}) {
  const isIncoming = alignment === "incoming";
  const showAvatar = isIncoming;
  return useRender({
    render: render ?? /* @__PURE__ */ jsx("div", {}),
    props: {
      ...props,
      className: [MDSChatBubble_default.root, className].filter(Boolean).join(" "),
      "data-alignment": alignment,
      "data-background": background,
      "data-type": type,
      children: /* @__PURE__ */ jsxs(Fragment, { children: [
        showAvatar && /* @__PURE__ */ jsx(
          "span",
          {
            className: MDSChatBubble_default.avatarContainer,
            "data-slot": "avatar",
            "aria-hidden": avatar ? void 0 : "true",
            children: avatar
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: MDSChatBubble_default.bubbleContainer, "data-slot": "bubble-container", children: [
          /* @__PURE__ */ jsx("div", { className: MDSChatBubble_default.bubble, "data-slot": "bubble", children: type === "loading" ? /* @__PURE__ */ jsx(
            "span",
            {
              className: MDSChatBubble_default.loader,
              "data-slot": "loader",
              role: "status",
              "aria-label": "Loading",
              children: /* @__PURE__ */ jsx(MDSIcon, { name: "spinner", size: 24, "aria-hidden": "true" })
            }
          ) : type === "media" ? /* @__PURE__ */ jsx("span", { className: MDSChatBubble_default.media, "data-slot": "media", children }) : /* @__PURE__ */ jsx(
            MDSText,
            {
              variant: "body",
              className: MDSChatBubble_default.message,
              "data-slot": "message",
              children
            }
          ) }),
          timestamp != null && /* @__PURE__ */ jsx(
            MDSText,
            {
              variant: "microcopy",
              className: MDSChatBubble_default.timestamp,
              "data-slot": "timestamp",
              children: timestamp
            }
          )
        ] })
      ] })
    }
  });
}
MDSChatBubble.displayName = "MDSChatBubble";

export {
  MDSChatBubble
};
//# sourceMappingURL=chunk-OM34CN4T.js.map