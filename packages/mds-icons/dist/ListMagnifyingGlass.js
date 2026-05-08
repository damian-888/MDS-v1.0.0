import { jsxs as s, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as h } from "react";
const m = t(({
  size: i = "1em",
  title: a,
  titleId: o,
  ...d
}, e) => {
  const n = h(), r = a ? o ?? n : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ l("title", { id: r, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M2.625 6A1.125 1.125 0 0 1 3.75 4.875h16.5a1.125 1.125 0 0 1 0 2.25H3.75A1.125 1.125 0 0 1 2.625 6m1.125 7.125h6a1.125 1.125 0 1 0 0-2.25h-6a1.125 1.125 0 1 0 0 2.25m7.5 3.75h-7.5a1.125 1.125 0 1 0 0 2.25h7.5a1.125 1.125 0 1 0 0-2.25m11.296 1.92a1.125 1.125 0 0 1-1.594 0l-1.695-1.694a4.125 4.125 0 1 1 1.594-1.594l1.695 1.694a1.123 1.123 0 0 1 0 1.595m-5.296-3.42a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75" })
  ] });
});
m.displayName = "ListMagnifyingGlass";
export {
  m as ListMagnifyingGlass
};
//# sourceMappingURL=ListMagnifyingGlass.js.map
