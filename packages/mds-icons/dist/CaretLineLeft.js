import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as f } from "react";
const h = s(({
  size: r = "1em",
  title: e,
  titleId: d,
  ...l
}, t) => {
  const a = f(), i = e ? d ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: t, "aria-labelledby": i, ...l, children: [
    e ? /* @__PURE__ */ o("title", { id: i, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M18.796 18.703a1.127 1.127 0 1 1-1.594 1.594l-7.5-7.5a1.124 1.124 0 0 1 0-1.594l7.5-7.5a1.127 1.127 0 1 1 1.594 1.594l-6.702 6.702zM6.75 3.374A1.125 1.125 0 0 0 5.625 4.5v15a1.125 1.125 0 0 0 2.25 0v-15A1.125 1.125 0 0 0 6.75 3.374" })
  ] });
});
h.displayName = "CaretLineLeft";
export {
  h as CaretLineLeft
};
//# sourceMappingURL=CaretLineLeft.js.map
