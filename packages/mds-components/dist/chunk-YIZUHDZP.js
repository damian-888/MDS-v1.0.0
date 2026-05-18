"use client";

// src/MDSText/MDSText.tsx
import "react";
import { useRender } from "@base-ui-components/react/use-render";
import { jsx } from "react/jsx-runtime";
function MDSText({
  variant = "body",
  render = /* @__PURE__ */ jsx("span", {}),
  className,
  children,
  ...props
}) {
  return useRender({
    render,
    props: {
      ...props,
      "data-variant": variant,
      className: [`mds-typography-${variant}`, className].filter(Boolean).join(" "),
      children
    }
  });
}
MDSText.displayName = "MDSText";

export {
  MDSText
};
//# sourceMappingURL=chunk-YIZUHDZP.js.map