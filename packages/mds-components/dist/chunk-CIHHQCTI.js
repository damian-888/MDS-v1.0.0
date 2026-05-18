"use client";

// src/MDSDivider/MDSDivider.tsx
import "react";
import { Separator as BaseSeparator } from "@base-ui-components/react/separator";

// src/MDSDivider/MDSDivider.module.css
var MDSDivider_default = {
  root: "MDSDivider_root"
};

// src/MDSDivider/MDSDivider.tsx
import { jsx } from "react/jsx-runtime";
function MDSDivider({
  orientation = "horizontal",
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    BaseSeparator,
    {
      ...props,
      orientation,
      "data-orientation": orientation,
      className: [MDSDivider_default.root, className].filter(Boolean).join(" ")
    }
  );
}
MDSDivider.displayName = "MDSDivider";

export {
  MDSDivider
};
//# sourceMappingURL=chunk-CIHHQCTI.js.map