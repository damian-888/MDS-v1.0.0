import { jsxs as s, jsx as r } from "react/jsx-runtime";
import { forwardRef as t, useId as h } from "react";
const g = t(({
  size: i = "1em",
  title: a,
  titleId: o,
  ...d
}, e) => {
  const n = h(), l = a ? o ?? n : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": l, ...d, children: [
    a ? /* @__PURE__ */ r("title", { id: l, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M14.625 10.5a1.125 1.125 0 0 1-1.125 1.124h-1.875V13.5a1.125 1.125 0 0 1-2.25 0v-1.875H7.5a1.125 1.125 0 1 1 0-2.25h1.875V7.5a1.125 1.125 0 0 1 2.25 0v1.875H13.5a1.125 1.125 0 0 1 1.125 1.125m7.171 11.295a1.124 1.124 0 0 1-1.593 0l-4.453-4.452a8.636 8.636 0 1 1 1.594-1.594l4.457 4.456a1.126 1.126 0 0 1-.005 1.59M10.5 16.875a6.375 6.375 0 1 0-6.375-6.376 6.38 6.38 0 0 0 6.375 6.375" })
  ] });
});
g.displayName = "MagnifyingGlassPlus";
export {
  g as MagnifyingGlassPlus
};
//# sourceMappingURL=MagnifyingGlassPlus.js.map
