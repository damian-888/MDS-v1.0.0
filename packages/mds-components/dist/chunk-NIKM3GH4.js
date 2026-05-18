"use client";

// src/MDSImage/MDSImage.tsx
import "react";
import { useRender } from "@base-ui-components/react/use-render";

// src/MDSImage/MDSImage.module.css
var MDSImage_default = {
  root: "MDSImage_root"
};

// src/MDSImage/MDSImage.tsx
import { jsx } from "react/jsx-runtime";
function MDSImage({
  src,
  alt,
  aspectRatio = "16/9",
  objectFit = "cover",
  fill = false,
  render,
  className,
  style,
  ...props
}) {
  const composedStyle = {
    ...fill ? null : {
      aspectRatio: typeof aspectRatio === "number" ? `${aspectRatio}` : aspectRatio
    },
    ...style
  };
  return useRender({
    render: render ?? /* @__PURE__ */ jsx("img", {}),
    props: {
      ...props,
      src,
      alt,
      className: [MDSImage_default.root, className].filter(Boolean).join(" "),
      "data-object-fit": objectFit,
      "data-fill": fill || void 0,
      style: composedStyle
    }
  });
}
MDSImage.displayName = "MDSImage";

export {
  MDSImage
};
//# sourceMappingURL=chunk-NIKM3GH4.js.map