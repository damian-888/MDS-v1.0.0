import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const v = t(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...h
}, e) => {
  const l = m(), i = a ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": i, ...h, children: [
    a ? /* @__PURE__ */ o("title", { id: i, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.25 13.125h-1.125v-5.25h1.125a1.125 1.125 0 0 0 0-2.25h-1.125V3.75a1.875 1.875 0 0 0-1.875-1.875H6.75A1.875 1.875 0 0 0 4.875 3.75v1.875H3.75a1.125 1.125 0 0 0 0 2.25h1.125v5.25H3.75a1.125 1.125 0 1 0 0 2.25h1.125v4.875a1.875 1.875 0 0 0 1.875 1.875h10.5a1.875 1.875 0 0 0 1.875-1.875v-4.875h1.125a1.125 1.125 0 1 0 0-2.25m-3.375 6.75h-9.75V4.125h9.75zM12 11.25a3 3 0 1 0 0-5.999 3 3 0 0 0 0 5.999m0-3.75A.75.75 0 1 1 12 9a.75.75 0 0 1 0-1.5m0 11.25a3 3 0 1 0 0-5.999 3 3 0 0 0 0 5.999M12 15a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5" })
  ] });
});
v.displayName = "TrafficSignal";
export {
  v as TrafficSignal
};
//# sourceMappingURL=TrafficSignal.js.map
