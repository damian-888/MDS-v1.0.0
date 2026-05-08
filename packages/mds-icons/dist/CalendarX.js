import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as v, useId as t } from "react";
const m = v(({
  size: r = "1em",
  title: a,
  titleId: e,
  ...o
}, i) => {
  const h = t(), d = a ? e ?? h : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": d, ...o, children: [
    a ? /* @__PURE__ */ l("title", { id: d, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "m15.046 12.796-1.452 1.454 1.455 1.454a1.127 1.127 0 1 1-1.594 1.594L12 15.844l-1.454 1.455a1.127 1.127 0 1 1-1.594-1.594l1.454-1.455-1.452-1.454a1.126 1.126 0 1 1 1.594-1.594L12 12.656l1.454-1.455a1.124 1.124 0 0 1 1.594 0 1.124 1.124 0 0 1 0 1.594zM21.375 4.5v15a1.875 1.875 0 0 1-1.875 1.875h-15A1.875 1.875 0 0 1 2.625 19.5v-15A1.875 1.875 0 0 1 4.5 2.625h1.875V2.25a1.125 1.125 0 0 1 2.25 0v.375h6.75V2.25a1.125 1.125 0 1 1 2.25 0v.375H19.5A1.875 1.875 0 0 1 21.375 4.5m-16.5.375v2.25h14.25v-2.25h-1.5a1.125 1.125 0 1 1-2.25 0h-6.75a1.125 1.125 0 0 1-2.25 0zm14.25 14.25v-9.75H4.875v9.75z" })
  ] });
});
m.displayName = "CalendarX";
export {
  m as CalendarX
};
//# sourceMappingURL=CalendarX.js.map
