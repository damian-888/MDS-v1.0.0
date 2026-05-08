import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...t
}, l) => {
  const a = m(), i = r ? d ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...t, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M15.229 11.149a4.876 4.876 0 1 0-6.458 0 5.625 5.625 0 1 0 6.458 0M9.375 7.5a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0M12 19.126a3.375 3.375 0 1 1 0-6.75 3.375 3.375 0 0 1 0 6.75" })
  ] });
});
s.displayName = "NumberEight";
export {
  s as NumberEight
};
//# sourceMappingURL=NumberEight.js.map
