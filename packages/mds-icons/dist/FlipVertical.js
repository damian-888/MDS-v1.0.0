import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const c = h(({
  size: i = "1em",
  title: r,
  titleId: o,
  ...d
}, a) => {
  const t = s(), l = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: l, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M5.25 11.25h15a1.875 1.875 0 0 0 .73-3.602l-.043-.018L5.954 2.012A1.875 1.875 0 0 0 3.375 3.75v5.625A1.875 1.875 0 0 0 5.25 11.25m.375-6.958L18.179 9H5.625zM20.25 12.75h-15a1.875 1.875 0 0 0-1.875 1.875v5.625a1.875 1.875 0 0 0 2.58 1.739l14.981-5.618.043-.018a1.875 1.875 0 0 0-.729-3.603M5.625 19.707V15h12.554z" })
  ] });
});
c.displayName = "FlipVertical";
export {
  c as FlipVertical
};
//# sourceMappingURL=FlipVertical.js.map
