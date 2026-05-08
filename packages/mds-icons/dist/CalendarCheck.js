import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as v, useId as t } from "react";
const m = v(({
  size: r = "1em",
  title: a,
  titleId: l,
  ...o
}, h) => {
  const i = t(), e = a ? l ?? i : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": e, ...o, children: [
    a ? /* @__PURE__ */ d("title", { id: e, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.5 2.625h-1.875V2.25a1.125 1.125 0 1 0-2.25 0v.375h-6.75V2.25a1.125 1.125 0 0 0-2.25 0v.375H4.5A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625M6.375 4.875a1.125 1.125 0 0 0 2.25 0h6.75a1.125 1.125 0 1 0 2.25 0h1.5v2.25H4.875v-2.25zm-1.5 14.25v-9.75h14.25v9.75zm11.296-7.92a1.125 1.125 0 0 1 0 1.593l-4.5 4.5a1.125 1.125 0 0 1-1.594 0l-2.25-2.25a1.127 1.127 0 1 1 1.594-1.594l1.454 1.452 3.704-3.705a1.124 1.124 0 0 1 1.592.003" })
  ] });
});
m.displayName = "CalendarCheck";
export {
  m as CalendarCheck
};
//# sourceMappingURL=CalendarCheck.js.map
