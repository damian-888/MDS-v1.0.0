import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as h } from "react";
const s = t(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, e) => {
  const m = h(), l = a ? o ?? m : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": l, ...d, children: [
    a ? /* @__PURE__ */ i("title", { id: l, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M10.875 3.375V3a1.125 1.125 0 1 1 2.25 0v.375a1.125 1.125 0 1 1-2.25 0m7.5 8.625A6.375 6.375 0 1 1 12 5.625 6.38 6.38 0 0 1 18.375 12m-2.25 0a4.125 4.125 0 1 0-8.25 0 4.125 4.125 0 0 0 8.25 0M4.829 6.42a1.127 1.127 0 0 0 1.594-1.593l-.375-.375a1.127 1.127 0 1 0-1.594 1.594zm0 11.157-.375.375a1.127 1.127 0 1 0 1.594 1.594l.375-.375a1.127 1.127 0 1 0-1.594-1.594M18.375 6.75a1.13 1.13 0 0 0 .796-.33l.375-.374a1.127 1.127 0 1 0-1.594-1.594l-.375.375a1.125 1.125 0 0 0 .798 1.923m.796 10.83a1.127 1.127 0 1 0-1.594 1.593l.375.375a1.127 1.127 0 1 0 1.594-1.594zM4.5 12a1.125 1.125 0 0 0-1.125-1.125H3a1.125 1.125 0 1 0 0 2.25h.375A1.125 1.125 0 0 0 4.5 12m7.5 7.5a1.125 1.125 0 0 0-1.125 1.125V21a1.125 1.125 0 1 0 2.25 0v-.375A1.125 1.125 0 0 0 12 19.5m9-8.625h-.375a1.125 1.125 0 1 0 0 2.25H21a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
s.displayName = "SunDim";
export {
  s as SunDim
};
//# sourceMappingURL=SunDim.js.map
