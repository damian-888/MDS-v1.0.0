import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as c, useId as m } from "react";
const s = c(({
  size: l = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const t = m(), o = a ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    a ? /* @__PURE__ */ r("title", { id: o, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M22.241 19.988c-1.98-.957-3.116-3.053-3.116-5.738v-1.62a1.87 1.87 0 0 0-1.183-1.742l-2.33-.92a.375.375 0 0 1-.213-.482l2-4.968A3 3 0 0 0 15.672.562a3.01 3.01 0 0 0-3.836 1.707l-.007.016-1.968 4.978a.37.37 0 0 1-.201.206.37.37 0 0 1-.281.005L6.994 6.51a1.865 1.865 0 0 0-2.037.428C2.912 9.04 1.875 11.501 1.875 14.25a10.82 10.82 0 0 0 3.027 7.528 1.12 1.12 0 0 0 .817.347H21.75a1.125 1.125 0 0 0 .491-2.137M6.393 8.693l2.144.87a2.625 2.625 0 0 0 3.416-1.472l1.964-4.968a.78.78 0 0 1 .969-.451.75.75 0 0 1 .432.99v.01l-2.005 4.98a2.63 2.63 0 0 0 1.47 3.406l2.092.828v1.364c0 .094 0 .194.005.29L5.4 9.947q.444-.668.992-1.254m4.551 11.182a7.85 7.85 0 0 1-2.07-3.657 1.125 1.125 0 0 0-2.18.563c.28 1.099.739 2.144 1.358 3.094H6.211a8.58 8.58 0 0 1-2.086-5.625 7.9 7.9 0 0 1 .32-2.26l12.813 5.124c.275.999.739 1.936 1.366 2.76z" })
  ] });
});
s.displayName = "Broom";
export {
  s as Broom
};
//# sourceMappingURL=Broom.js.map
