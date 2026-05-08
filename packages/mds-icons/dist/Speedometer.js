import { jsxs as m, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: r = "1em",
  title: e,
  titleId: a,
  ...i
}, l) => {
  const t = h(), o = e ? a ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    e ? /* @__PURE__ */ d("title", { id: o, children: e }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m11.204 13.453 8.25-8.25a1.128 1.128 0 0 1 1.594 1.594l-8.25 8.25a1.126 1.126 0 1 1-1.594-1.594m1.334-4.05a1.125 1.125 0 1 0 .246-2.236 7.133 7.133 0 0 0-7.909 7.082 1.125 1.125 0 1 0 2.25 0 4.88 4.88 0 0 1 5.413-4.846m9.52.703a1.126 1.126 0 0 0-2.08.862c.77 1.88.855 3.97.241 5.906H3.782A8.646 8.646 0 0 1 12 5.624h.079c1.1.008 2.189.228 3.206.648a1.125 1.125 0 0 0 .857-2.08A10.881 10.881 0 0 0 1.74 17.865a1.88 1.88 0 0 0 1.77 1.258h16.976a1.88 1.88 0 0 0 1.77-1.255 10.9 10.9 0 0 0-.2-7.763" })
  ] });
});
s.displayName = "Speedometer";
export {
  s as Speedometer
};
//# sourceMappingURL=Speedometer.js.map
