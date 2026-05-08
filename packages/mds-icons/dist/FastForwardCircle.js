import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const c = s(({
  size: l = "1em",
  title: r,
  titleId: a,
  ...e
}, i) => {
  const t = m(), o = r ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M18.375 12a1.13 1.13 0 0 1-.422.878l-3.75 3A1.124 1.124 0 0 1 12.375 15v-1.86l-3.422 2.738A1.125 1.125 0 0 1 7.125 15V9a1.125 1.125 0 0 1 1.828-.878l3.422 2.737V9a1.126 1.126 0 0 1 1.828-.878l3.75 3a1.13 1.13 0 0 1 .422.878m3.75 0A10.124 10.124 0 1 1 12 1.875 10.136 10.136 0 0 1 22.125 12m-2.25 0A7.875 7.875 0 1 0 12 19.875 7.883 7.883 0 0 0 19.875 12" })
  ] });
});
c.displayName = "FastForwardCircle";
export {
  c as FastForwardCircle
};
//# sourceMappingURL=FastForwardCircle.js.map
