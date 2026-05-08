import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as c } from "react";
const p = h(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...e
}, n) => {
  const o = c(), i = a ? d ?? o : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: n, "aria-labelledby": i, ...e, children: [
    a ? /* @__PURE__ */ l("title", { id: i, children: a }) : null,
    /* @__PURE__ */ l("g", { clipPath: "url(#a)", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M24 20.25a1.125 1.125 0 0 1-1.125 1.125H9.75a1.125 1.125 0 0 1 0-2.25h13.125A1.125 1.125 0 0 1 24 20.25m-2.554-2.292L4.888 13.321A4.14 4.14 0 0 1 1.875 9.35V4.5a1.875 1.875 0 0 1 2.468-1.78l.513.17a1.13 1.13 0 0 1 .702.685l.93 2.574 2.137.61V4.5a1.875 1.875 0 0 1 2.467-1.78l.514.17a1.13 1.13 0 0 1 .682.633l2.039 4.86 5.531 1.546a4.136 4.136 0 0 1 3.017 3.976v2.97a1.125 1.125 0 0 1-1.429 1.083m-.821-4.053a1.88 1.88 0 0 0-1.373-1.806l-6.055-1.692a1.12 1.12 0 0 1-.735-.648l-1.587-3.786V8.25a1.125 1.125 0 0 1-1.433 1.082L5.317 8.157a1.13 1.13 0 0 1-.75-.7l-.442-1.224v3.116a1.88 1.88 0 0 0 1.37 1.808l15.13 4.235z" }) }),
    /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("clipPath", { id: "a", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
p.displayName = "AirplaneLanding";
export {
  p as AirplaneLanding
};
//# sourceMappingURL=AirplaneLanding.js.map
