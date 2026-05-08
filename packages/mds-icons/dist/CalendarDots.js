import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const m = n(({
  size: r = "1em",
  title: a,
  titleId: e,
  ...i
}, l) => {
  const t = v(), o = a ? e ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    a ? /* @__PURE__ */ d("title", { id: o, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.5 2.625h-1.875V2.25a1.125 1.125 0 1 0-2.25 0v.375h-6.75V2.25a1.125 1.125 0 0 0-2.25 0v.375H4.5A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625M6.375 4.875a1.125 1.125 0 0 0 2.25 0h6.75a1.125 1.125 0 1 0 2.25 0h1.5v2.25H4.875v-2.25zm-1.5 14.25v-9.75h14.25v9.75zM13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-9 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
m.displayName = "CalendarDots";
export {
  m as CalendarDots
};
//# sourceMappingURL=CalendarDots.js.map
