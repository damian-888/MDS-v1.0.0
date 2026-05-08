import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as h } from "react";
const m = t(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const n = h(), l = r ? o ?? n : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: l, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M3.375 9.75a1.125 1.125 0 0 1 .736-1.056l14.25-5.25a1.125 1.125 0 0 1 .778 2.112L7.754 9.75l11.385 4.194a1.125 1.125 0 1 1-.778 2.112l-14.25-5.25a1.13 1.13 0 0 1-.736-1.056m15.375 7.875H4.5a1.125 1.125 0 0 0 0 2.25h14.25a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
m.displayName = "LessThanOrEqual";
export {
  m as LessThanOrEqual
};
//# sourceMappingURL=LessThanOrEqual.js.map
