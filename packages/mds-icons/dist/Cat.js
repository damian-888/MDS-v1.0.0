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
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.967 2.769a1.875 1.875 0 0 0-2.096.464l-1.406 1.622a10.81 10.81 0 0 0-10.922 0L5.137 3.233l-.054-.057A1.875 1.875 0 0 0 1.875 4.5v8.25c0 5.17 4.542 9.375 10.125 9.375s10.125-4.205 10.125-9.375V4.5a1.875 1.875 0 0 0-1.158-1.731m-1.092 9.981c0 3.584-2.94 6.556-6.75 7.051V18.47l1.17-1.17a1.127 1.127 0 1 0-1.593-1.595l-.702.703-.704-.705a1.127 1.127 0 1 0-1.594 1.593l1.173 1.174v1.335c-3.81-.495-6.75-3.469-6.75-7.05V5.506l1.363 1.569a1.125 1.125 0 0 0 1.52.165A8 8 0 0 1 9 6.163V8.25a1.125 1.125 0 0 0 2.25 0V5.658a8.6 8.6 0 0 1 1.5 0V8.25a1.125 1.125 0 1 0 2.25 0V6.163a8 8 0 0 1 1.992 1.078 1.125 1.125 0 0 0 1.52-.165l1.363-1.569zm-10.5.375a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8.25 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
c.displayName = "Cat";
export {
  c as Cat
};
//# sourceMappingURL=Cat.js.map
