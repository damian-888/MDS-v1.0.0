import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const p = s(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...t
}, a) => {
  const l = h(), o = r ? i ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": o, ...t, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.375 12a8.635 8.635 0 0 1-8.625 8.625H6a1.125 1.125 0 1 1 0-2.25h6.75a6.375 6.375 0 1 0 0-12.75H6a1.125 1.125 0 0 1 0-2.25h6.75A8.635 8.635 0 0 1 21.375 12" })
  ] });
});
p.displayName = "SupersetProperOf";
export {
  p as SupersetProperOf
};
//# sourceMappingURL=SupersetProperOf.js.map
