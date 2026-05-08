import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const v = t(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...l
}, e) => {
  const i = m(), h = a ? d ?? i : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": h, ...l, children: [
    a ? /* @__PURE__ */ o("title", { id: h, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M2.25 10.125h1.875v4.5H3a1.125 1.125 0 1 0 0 2.25h18a1.125 1.125 0 0 0 0-2.25h-1.125v-4.5h1.875a1.125 1.125 0 0 0 .59-2.083l-9.75-6a1.13 1.13 0 0 0-1.18 0l-9.75 6a1.125 1.125 0 0 0 .59 2.083m4.125 0h2.25v4.5h-2.25zm6.75 0v4.5h-2.25v-4.5zm4.5 4.5h-2.25v-4.5h2.25zM12 4.321l5.775 3.554H6.225zm11.625 15.18a1.125 1.125 0 0 1-1.125 1.124h-21a1.125 1.125 0 0 1 0-2.25h21a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
v.displayName = "Bank";
export {
  v as Bank
};
//# sourceMappingURL=Bank.js.map
