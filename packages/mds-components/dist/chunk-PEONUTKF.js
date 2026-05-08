"use client";

// src/MDSIcon/MDSIcon.tsx
import * as React from "react";
import { iconRegistry } from "@mds/icons";

// src/MDSIcon/MDSIcon.module.css
var MDSIcon_default = {
  root: "MDSIcon_root"
};

// src/MDSIcon/MDSIcon.tsx
import { jsx } from "react/jsx-runtime";
function MDSIcon({
  name,
  size = "medium",
  className,
  style,
  ...props
}) {
  const LazyIcon = iconRegistry[name];
  const isSemantic = typeof size === "string";
  const sizeStyle = isSemantic ? void 0 : { "--MDSIcon-size": `${size}px` };
  const composedClassName = [MDSIcon_default.root, className].filter(Boolean).join(" ");
  const composedStyle = sizeStyle || style ? { ...sizeStyle, ...style } : void 0;
  return /* @__PURE__ */ jsx(
    React.Suspense,
    {
      fallback: /* @__PURE__ */ jsx(
        "span",
        {
          "aria-hidden": "true",
          className: composedClassName,
          style: composedStyle
        }
      ),
      children: /* @__PURE__ */ jsx(
        LazyIcon,
        {
          ...props,
          className: composedClassName,
          style: composedStyle,
          "data-size": isSemantic ? size : void 0
        }
      )
    }
  );
}
MDSIcon.displayName = "MDSIcon";

export {
  MDSIcon
};
//# sourceMappingURL=chunk-PEONUTKF.js.map