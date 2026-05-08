import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as c, useId as s } from "react";
const h = c(({
  size: r = "1em",
  title: o,
  titleId: a,
  ...i
}, d) => {
  const t = s(), e = o ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: d, "aria-labelledby": e, ...i, children: [
    o ? /* @__PURE__ */ l("title", { id: e, children: o }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M13.125 7.5v3.864l3.203 1.921a1.126 1.126 0 1 1-1.156 1.93l-3.75-2.25a1.13 1.13 0 0 1-.547-.965V7.5a1.125 1.125 0 1 1 2.25 0M12 2.625a9.32 9.32 0 0 0-6.634 2.75c-.44.445-.843.88-1.241 1.313V6a1.125 1.125 0 0 0-2.25 0v3.75A1.125 1.125 0 0 0 3 10.875h3.75a1.125 1.125 0 1 0 0-2.25H5.416a36 36 0 0 1 1.546-1.663A7.125 7.125 0 1 1 7.11 17.18a1.125 1.125 0 1 0-1.545 1.636A9.375 9.375 0 1 0 12 2.625" })
  ] });
});
h.displayName = "ClockCounterClockwise";
export {
  h as ClockCounterClockwise
};
//# sourceMappingURL=ClockCounterClockwise.js.map
