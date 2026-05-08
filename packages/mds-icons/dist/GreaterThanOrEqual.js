import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const t = s(), e = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: e, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M4.861 13.944 16.246 9.75 4.861 5.556a1.125 1.125 0 1 1 .778-2.112l14.25 5.25a1.125 1.125 0 0 1 0 2.112l-14.25 5.25a1.125 1.125 0 0 1-.778-2.112M19.5 17.625H5.25a1.125 1.125 0 0 0 0 2.25H19.5a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
m.displayName = "GreaterThanOrEqual";
export {
  m as GreaterThanOrEqual
};
//# sourceMappingURL=GreaterThanOrEqual.js.map
