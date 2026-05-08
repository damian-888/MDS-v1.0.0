import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...l
}, i) => {
  const t = h(), a = o ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": a, ...l, children: [
    o ? /* @__PURE__ */ e("title", { id: a, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M18 16.874h-6.871a5.248 5.248 0 0 1-8.775 2.643 5.25 5.25 0 0 1-1.031-6.155 1.125 1.125 0 1 1 2.003 1.024A3 3 0 1 0 9 15.749a1.125 1.125 0 0 1 1.125-1.125H18a1.125 1.125 0 0 1 0 2.25m0-6.375a5.2 5.2 0 0 0-1.73.292L12.958 5.41a1.124 1.124 0 1 0-1.916 1.18l3.838 6.236a1.12 1.12 0 0 0 1.548.368 3.001 3.001 0 1 1 1.845 5.544 1.125 1.125 0 0 0 .102 2.245 1 1 0 0 0 .102 0A5.25 5.25 0 0 0 18 10.499M5.41 16.707a1.124 1.124 0 0 0 1.548-.368l3.838-6.237a1.125 1.125 0 0 0-.367-1.547 3 3 0 1 1 4.245-3.92 1.126 1.126 0 1 0 2.003-1.023 5.25 5.25 0 1 0-8.324 6.167l-3.311 5.38a1.125 1.125 0 0 0 .368 1.548" })
  ] });
});
m.displayName = "WebhooksLogo";
export {
  m as WebhooksLogo
};
//# sourceMappingURL=WebhooksLogo.js.map
