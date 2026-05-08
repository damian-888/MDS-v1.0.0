import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const c = s(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...i
}, t) => {
  const l = h(), e = r ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M4.875 4.875v14.25H7.5a1.125 1.125 0 1 1 0 2.25H3.75a1.125 1.125 0 0 1-1.125-1.125V3.75A1.125 1.125 0 0 1 3.75 2.625H7.5a1.125 1.125 0 0 1 0 2.25zm15.375-2.25H16.5a1.125 1.125 0 0 0 0 2.25h2.625v14.25H16.5a1.125 1.125 0 1 0 0 2.25h3.75a1.125 1.125 0 0 0 1.125-1.125V3.75a1.125 1.125 0 0 0-1.125-1.125" })
  ] });
});
c.displayName = "BracketsSquare";
export {
  c as BracketsSquare
};
//# sourceMappingURL=BracketsSquare.js.map
