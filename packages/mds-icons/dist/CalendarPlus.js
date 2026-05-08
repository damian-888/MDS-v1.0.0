import { jsxs as v, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as t } from "react";
const s = n(({
  size: r = "1em",
  title: a,
  titleId: l,
  ...o
}, h) => {
  const i = t(), d = a ? l ?? i : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": d, ...o, children: [
    a ? /* @__PURE__ */ e("title", { id: d, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M19.5 2.625h-1.875V2.25a1.125 1.125 0 1 0-2.25 0v.375h-6.75V2.25a1.125 1.125 0 0 0-2.25 0v.375H4.5A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625M6.375 4.875a1.125 1.125 0 0 0 2.25 0h6.75a1.125 1.125 0 1 0 2.25 0h1.5v2.25H4.875v-2.25zm-1.5 14.25v-9.75h14.25v9.75zm10.5-4.875a1.125 1.125 0 0 1-1.125 1.125h-1.125V16.5a1.125 1.125 0 1 1-2.25 0v-1.125H9.75a1.125 1.125 0 1 1 0-2.25h1.125V12a1.125 1.125 0 1 1 2.25 0v1.125h1.125a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
s.displayName = "CalendarPlus";
export {
  s as CalendarPlus
};
//# sourceMappingURL=CalendarPlus.js.map
