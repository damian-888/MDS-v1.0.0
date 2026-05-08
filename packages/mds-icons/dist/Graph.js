import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as c } from "react";
const h = m(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const t = c(), l = a ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": l, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: l, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M18.75 14.25c-.537 0-1.067.128-1.543.375l-2.006-1.56c.11-.324.168-.662.174-1.004l.97-.323a3.375 3.375 0 1 0-.955-2.054l-.73.243a3.38 3.38 0 0 0-2.924-1.29l-.417-.938A3.375 3.375 0 1 0 9 8.625c.094 0 .177 0 .264-.011l.417.937a3.37 3.37 0 0 0-.805 3.722L6.88 15.046a3.376 3.376 0 1 0 1.494 1.68l1.995-1.772a3.37 3.37 0 0 0 3.45-.113l1.837 1.43a3.375 3.375 0 1 0 3.094-2.021m0-6a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25m-10.875-3a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0M5.25 19.125a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25M10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0m7.875 6.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25" })
  ] });
});
h.displayName = "Graph";
export {
  h as Graph
};
//# sourceMappingURL=Graph.js.map
