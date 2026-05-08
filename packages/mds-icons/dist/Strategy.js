import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as c } from "react";
const s = m(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, t) => {
  const i = c(), l = a ? o ?? i : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: t, "aria-labelledby": l, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: l, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7.5 13.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 5.25a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M4.5 12a1.125 1.125 0 0 1-.796-1.92L4.781 9 3.704 7.92a1.127 1.127 0 0 1 1.594-1.593l1.077 1.08 1.08-1.078a1.127 1.127 0 0 1 1.593 1.594L7.968 9l1.08 1.08a1.127 1.127 0 1 1-1.593 1.593l-1.08-1.08-1.079 1.078A1.13 1.13 0 0 1 4.5 12m17.296 7.08a1.127 1.127 0 1 1-1.594 1.593l-1.077-1.08-1.079 1.08a1.127 1.127 0 1 1-1.594-1.593l1.08-1.08-1.08-1.08a1.127 1.127 0 1 1 1.593-1.593l1.08 1.08 1.08-1.08a1.127 1.127 0 1 1 1.593 1.593L20.718 18zm-4.069-8.684c-.488 2.156-2.187 4.08-4.227 4.802a1.124 1.124 0 1 1-.75-2.122c1.32-.469 2.463-1.773 2.782-3.178.222-.98.037-1.954-.533-2.863v.844a1.125 1.125 0 1 1-2.25 0V4.125A1.125 1.125 0 0 1 13.874 3h3.75a1.125 1.125 0 0 1 0 2.25H16.5c1.197 1.557 1.633 3.352 1.227 5.146" })
  ] });
});
s.displayName = "Strategy";
export {
  s as Strategy
};
//# sourceMappingURL=Strategy.js.map
