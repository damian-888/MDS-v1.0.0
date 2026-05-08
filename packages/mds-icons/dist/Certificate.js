import { jsxs as v, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const h = m(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, t) => {
  const l = n(), e = a ? o ?? l : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: t, "aria-labelledby": e, ...d, children: [
    a ? /* @__PURE__ */ i("title", { id: e, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M12 13.125a1.125 1.125 0 0 1-1.125 1.125H6.75a1.125 1.125 0 1 1 0-2.25h4.125A1.125 1.125 0 0 1 12 13.125M10.875 8.25H6.75a1.125 1.125 0 0 0 0 2.25h4.125a1.125 1.125 0 1 0 0-2.25m11.25 7.42v5.705a1.125 1.125 0 0 1-1.683.977l-2.067-1.181-2.062 1.18a1.125 1.125 0 0 1-1.688-.976v-2.25H3.75a1.875 1.875 0 0 1-1.875-1.875v-12A1.875 1.875 0 0 1 3.75 3.375h16.5a1.875 1.875 0 0 1 1.875 1.875v3.08a5.24 5.24 0 0 1 0 7.34m-3.75-.67a3 3 0 1 0 0-5.999 3 3 0 0 0 0 5.999m-3.75 1.875v-1.206a5.25 5.25 0 0 1 5.25-8.7V5.625H4.125v11.25zm5.25 2.561v-2.405a5.24 5.24 0 0 1-3 0v2.405l.942-.538a1.13 1.13 0 0 1 1.116 0z" })
  ] });
});
h.displayName = "Certificate";
export {
  h as Certificate
};
//# sourceMappingURL=Certificate.js.map
