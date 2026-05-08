import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...t
}, l) => {
  const a = h(), o = r ? i ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...t, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-7.875-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m12.75 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" })
  ] });
});
m.displayName = "DotsThree";
export {
  m as DotsThree
};
//# sourceMappingURL=DotsThree.js.map
