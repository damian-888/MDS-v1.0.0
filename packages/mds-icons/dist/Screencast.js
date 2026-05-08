import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const h = s(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...i
}, t) => {
  const l = c(), e = r ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21.75 5.625v12.75a1.875 1.875 0 0 1-1.875 1.875h-3.75a1.125 1.125 0 1 1 0-2.25H19.5V6h-15v.375a1.125 1.125 0 0 1-2.25 0v-.75A1.875 1.875 0 0 1 4.125 3.75h15.75a1.875 1.875 0 0 1 1.875 1.875M3.375 16.5a1.125 1.125 0 1 0 0 2.25.375.375 0 0 1 .375.375 1.125 1.125 0 0 0 2.25 0A2.625 2.625 0 0 0 3.375 16.5m0-3.75a1.125 1.125 0 1 0 0 2.25A4.13 4.13 0 0 1 7.5 19.125a1.125 1.125 0 0 0 2.25 0 6.38 6.38 0 0 0-6.375-6.375m0-3.75a1.125 1.125 0 0 0 0 2.25 7.883 7.883 0 0 1 7.875 7.875 1.125 1.125 0 1 0 2.25 0A10.137 10.137 0 0 0 3.375 9" })
  ] });
});
h.displayName = "Screencast";
export {
  h as Screencast
};
//# sourceMappingURL=Screencast.js.map
