import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: l = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const t = s(), r = a ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: r, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21.97 15.937a1.125 1.125 0 0 1-.408 1.535l-9 5.25a1.13 1.13 0 0 1-1.134 0l-9-5.25a1.125 1.125 0 1 1 1.133-1.944L12 20.448l8.438-4.92a1.125 1.125 0 0 1 1.534.41m-1.533-4.91L12 15.948l-8.433-4.92a1.125 1.125 0 0 0-1.13 1.945l9 5.25a1.13 1.13 0 0 0 1.135 0l9-5.25a1.126 1.126 0 0 0-1.135-1.944M1.875 7.5a1.13 1.13 0 0 1 .562-.972l9-5.25a1.13 1.13 0 0 1 1.135 0l9 5.25a1.126 1.126 0 0 1 0 1.944l-9 5.25a1.13 1.13 0 0 1-1.135 0l-9-5.25a1.13 1.13 0 0 1-.562-.972m3.358 0L12 11.448 18.767 7.5 12 3.552z" })
  ] });
});
c.displayName = "Stack";
export {
  c as Stack
};
//# sourceMappingURL=Stack.js.map
