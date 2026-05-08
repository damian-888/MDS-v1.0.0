import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const m = n(({
  size: a = "1em",
  title: r,
  titleId: e,
  ...i
}, l) => {
  const t = v(), o = r ? e ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M13.875 14.25a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0m7.5-9.75v15a1.875 1.875 0 0 1-1.875 1.875h-15A1.875 1.875 0 0 1 2.625 19.5v-15A1.875 1.875 0 0 1 4.5 2.625h1.875V2.25a1.125 1.125 0 0 1 2.25 0v.375h6.75V2.25a1.125 1.125 0 1 1 2.25 0v.375H19.5A1.875 1.875 0 0 1 21.375 4.5m-16.5.375v2.25h14.25v-2.25h-1.5a1.125 1.125 0 1 1-2.25 0h-6.75a1.125 1.125 0 0 1-2.25 0zm14.25 14.25v-9.75H4.875v9.75z" })
  ] });
});
m.displayName = "CalendarDot";
export {
  m as CalendarDot
};
//# sourceMappingURL=CalendarDot.js.map
