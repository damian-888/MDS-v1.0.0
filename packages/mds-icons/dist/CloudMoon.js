import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: o,
  titleId: l,
  ...e
}, i) => {
  const n = m(), d = o ? l ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": d, ...e, children: [
    o ? /* @__PURE__ */ a("title", { id: d, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M16.125 6.375q-.233 0-.464.015A7.12 7.12 0 0 0 10.224.556a1.125 1.125 0 0 0-1.348 1.348A4.88 4.88 0 0 1 3.028 7.75 1.125 1.125 0 0 0 1.681 9.1a7.18 7.18 0 0 0 2.617 4.057 5.25 5.25 0 0 0 4.327 8.218h7.5a7.5 7.5 0 0 0 0-15m-4.885-3a4.84 4.84 0 0 1 2.22 3.484 7.54 7.54 0 0 0-4.236 4.046 5 5 0 0 0-.599-.03c-.93-.001-1.844.247-2.646.718a4.9 4.9 0 0 1-1.466-1.479 7.135 7.135 0 0 0 6.727-6.74m4.885 15.75h-7.5a3 3 0 0 1 0-6h.026q-.015.154-.024.31a1.127 1.127 0 0 0 2.25.13q.03-.524.163-1.03l.014-.053a5.256 5.256 0 1 1 5.071 6.643" })
  ] });
});
s.displayName = "CloudMoon";
export {
  s as CloudMoon
};
//# sourceMappingURL=CloudMoon.js.map
