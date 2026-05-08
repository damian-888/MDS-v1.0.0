import { jsxs as s, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as h } from "react";
const g = t(({
  size: a = "1em",
  title: i,
  titleId: n,
  ...o
}, d) => {
  const e = h(), r = i ? n ?? e : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    i ? /* @__PURE__ */ l("title", { id: r, children: i }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M14.625 10.5a1.125 1.125 0 0 1-1.125 1.124h-6a1.125 1.125 0 1 1 0-2.25h6a1.125 1.125 0 0 1 1.125 1.125m7.171 11.295a1.124 1.124 0 0 1-1.593 0l-4.453-4.452a8.636 8.636 0 1 1 1.594-1.594l4.457 4.456a1.126 1.126 0 0 1-.005 1.59M10.5 16.875a6.375 6.375 0 1 0-6.375-6.376 6.38 6.38 0 0 0 6.375 6.375" })
  ] });
});
g.displayName = "MagnifyingGlassMinus";
export {
  g as MagnifyingGlassMinus
};
//# sourceMappingURL=MagnifyingGlassMinus.js.map
