import { jsxs as m, jsx as r } from "react/jsx-runtime";
import { forwardRef as t, useId as h } from "react";
const s = t(({
  size: a = "1em",
  title: l,
  titleId: i,
  ...o
}, d) => {
  const n = h(), e = l ? i ?? n : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    l ? /* @__PURE__ */ r("title", { id: e, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M18 13.875H6a1.125 1.125 0 1 1 0-2.25h12a1.125 1.125 0 1 1 0 2.25m3.75-6.75H2.25a1.125 1.125 0 0 0 0 2.25h19.5a1.125 1.125 0 0 0 0-2.25m-9.75 9H9.75a1.125 1.125 0 1 0 0 2.25H12a1.125 1.125 0 1 0 0-2.25m9.046-.42a1.125 1.125 0 0 0-1.594 0L18 17.155l-1.454-1.455a1.127 1.127 0 1 0-1.594 1.594l1.454 1.455-1.455 1.454a1.124 1.124 0 0 0 0 1.594 1.126 1.126 0 0 0 1.594 0L18 20.344l1.454 1.455a1.127 1.127 0 1 0 1.594-1.594l-1.454-1.455 1.455-1.454a1.124 1.124 0 0 0-.003-1.592" })
  ] });
});
s.displayName = "FunnelSimpleX";
export {
  s as FunnelSimpleX
};
//# sourceMappingURL=FunnelSimpleX.js.map
