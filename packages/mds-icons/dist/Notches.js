import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: r = "1em",
  title: o,
  titleId: l,
  ...i
}, a) => {
  const t = h(), e = o ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: a, "aria-labelledby": e, ...i, children: [
    o ? /* @__PURE__ */ d("title", { id: e, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m20.296 12.796-7.5 7.5a1.126 1.126 0 1 1-1.594-1.594l7.5-7.5a1.126 1.126 0 1 1 1.594 1.594m-1.5-9.844a1.124 1.124 0 0 0-1.594 0l-14.25 14.25a1.127 1.127 0 1 0 1.594 1.594l14.25-14.25a1.125 1.125 0 0 0 0-1.592z" })
  ] });
});
m.displayName = "Notches";
export {
  m as Notches
};
//# sourceMappingURL=Notches.js.map
