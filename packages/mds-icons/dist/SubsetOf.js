import { jsxs as h, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...i
}, t) => {
  const l = s(), o = r ? d ?? l : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M19.875 19.5a1.125 1.125 0 0 1-1.125 1.125H4.5a1.125 1.125 0 1 1 0-2.25h14.25a1.125 1.125 0 0 1 1.125 1.125m-1.125-4.875h-9a4.125 4.125 0 0 1 0-8.25h9a1.125 1.125 0 0 0 0-2.25h-9a6.375 6.375 0 0 0 0 12.75h9a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
m.displayName = "SubsetOf";
export {
  m as SubsetOf
};
//# sourceMappingURL=SubsetOf.js.map
