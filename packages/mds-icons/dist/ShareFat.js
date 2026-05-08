import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as c, useId as h } from "react";
const m = c(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const t = h(), e = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m22.546 9.705-7.5-7.5A1.125 1.125 0 0 0 13.125 3v3.444c-2.415.293-5.031 1.49-7.196 3.326-2.733 2.319-4.436 5.314-4.794 8.437a1.5 1.5 0 0 0 2.584 1.2c.98-1.045 4.406-4.289 9.406-4.728V18a1.124 1.124 0 0 0 1.92.796l7.5-7.5a1.125 1.125 0 0 0 0-1.59m-7.171 5.576V13.5a1.125 1.125 0 0 0-1.125-1.125c-4.594 0-8.116 2.021-10.293 3.76.668-1.702 1.84-3.302 3.428-4.649 2.112-1.791 4.678-2.861 6.865-2.861A1.125 1.125 0 0 0 15.375 7.5V5.719l4.78 4.78z" })
  ] });
});
m.displayName = "ShareFat";
export {
  m as ShareFat
};
//# sourceMappingURL=ShareFat.js.map
