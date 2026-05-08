import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: o = "1em",
  title: a,
  titleId: e,
  ...i
}, l) => {
  const t = s(), r = a ? e ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M23.625 15a4.13 4.13 0 0 1-4.125 4.125h-1.634a5.64 5.64 0 0 1-5.097-3.247L9.942 9.823a3.39 3.39 0 0 0-3.058-1.948H6a3.375 3.375 0 0 0-3.375 3.375v2.25A3.375 3.375 0 0 0 6 16.875h.75A2.63 2.63 0 0 0 9.158 15.3a1.125 1.125 0 0 1 2.062.9 4.88 4.88 0 0 1-4.47 2.925H6A5.63 5.63 0 0 1 .375 13.5v-2.25A5.63 5.63 0 0 1 6 5.625h.884a5.64 5.64 0 0 1 5.097 3.247l2.832 6.055a3.39 3.39 0 0 0 3.053 1.948H19.5a1.875 1.875 0 1 0 0-3.75h-1.875a3.75 3.75 0 0 1 0-7.5H19.5A3.375 3.375 0 0 1 22.875 9a1.125 1.125 0 1 1-2.25 0A1.125 1.125 0 0 0 19.5 7.875h-1.875a1.5 1.5 0 0 0 0 3H19.5A4.13 4.13 0 0 1 23.625 15" })
  ] });
});
m.displayName = "LastfmLogo";
export {
  m as LastfmLogo
};
//# sourceMappingURL=LastfmLogo.js.map
