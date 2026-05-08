import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const f = s(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...a
}, t) => {
  const l = h(), o = r ? i ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": o, ...a, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.875 19.5a1.125 1.125 0 0 1-1.125 1.125H12a8.625 8.625 0 0 1 0-17.25h6.75a1.125 1.125 0 0 1 0 2.25H12a6.375 6.375 0 1 0 0 12.75h6.75a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
f.displayName = "SubsetProperOf";
export {
  f as SubsetProperOf
};
//# sourceMappingURL=SubsetProperOf.js.map
