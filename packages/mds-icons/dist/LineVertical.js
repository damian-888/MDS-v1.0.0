import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const h = s(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, t) => {
  const a = c(), i = r ? d ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M13.125 2.25v19.5a1.125 1.125 0 1 1-2.25 0V2.25a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
h.displayName = "LineVertical";
export {
  h as LineVertical
};
//# sourceMappingURL=LineVertical.js.map
