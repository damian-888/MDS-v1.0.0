import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as v, useId as h } from "react";
const s = v(({
  size: o = "1em",
  title: a,
  titleId: d,
  ...e
}, t) => {
  const l = h(), r = a ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: t, "aria-labelledby": r, ...e, children: [
    a ? /* @__PURE__ */ i("title", { id: r, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M7.125 20.25A1.125 1.125 0 0 1 6 21.375H3.75a1.125 1.125 0 0 1-1.125-1.125V3.75A1.125 1.125 0 0 1 3.75 2.625H6a1.125 1.125 0 0 1 0 2.25H4.875v14.25H6a1.125 1.125 0 0 1 1.125 1.125M20.25 2.625H18a1.125 1.125 0 0 0 0 2.25h1.125v14.25H18a1.125 1.125 0 1 0 0 2.25h2.25a1.125 1.125 0 0 0 1.125-1.125V3.75a1.125 1.125 0 0 0-1.125-1.125M17.625 15v-3.75A3.375 3.375 0 0 0 12 8.738a3.37 3.37 0 0 0-3.704-.533A1.125 1.125 0 0 0 6.375 9v6a1.125 1.125 0 0 0 2.25 0v-3.75a1.125 1.125 0 0 1 2.25 0V15a1.125 1.125 0 1 0 2.25 0v-3.75a1.125 1.125 0 1 1 2.25 0V15a1.125 1.125 0 1 0 2.25 0" })
  ] });
});
s.displayName = "MatrixLogo";
export {
  s as MatrixLogo
};
//# sourceMappingURL=MatrixLogo.js.map
