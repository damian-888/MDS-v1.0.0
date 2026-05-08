import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const s = t(({
  size: r = "1em",
  title: a,
  titleId: e,
  ...i
}, l) => {
  const v = m(), d = a ? e ?? v : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": d, ...i, children: [
    a ? /* @__PURE__ */ o("title", { id: d, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M17.625 7.874q-.381 0-.75.094V5.624a3 3 0 0 0-4.05-2.812 3 3 0 0 0-5.7 1.312v.094a3 3 0 0 0-3.75 2.906v7.125a8.625 8.625 0 1 0 17.25 0v-3.375a3 3 0 0 0-3-3m.75 6.375a6.375 6.375 0 1 1-12.75 0V7.124a.75.75 0 1 1 1.5 0v3.75a1.125 1.125 0 0 0 2.25 0v-6.75a.75.75 0 1 1 1.5 0v6a1.125 1.125 0 1 0 2.25 0v-4.5a.75.75 0 1 1 1.5 0v6.131a4.884 4.884 0 0 0-3.75 4.744 1.125 1.125 0 1 0 2.25 0 2.625 2.625 0 0 1 2.625-2.625 1.125 1.125 0 0 0 1.125-1.125v-1.875a.75.75 0 1 1 1.5 0z" })
  ] });
});
s.displayName = "HandPalm";
export {
  s as HandPalm
};
//# sourceMappingURL=HandPalm.js.map
