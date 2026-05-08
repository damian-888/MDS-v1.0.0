import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const s = n(({
  size: r = "1em",
  title: a,
  titleId: l,
  ...e
}, i) => {
  const h = v(), o = a ? l ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    a ? /* @__PURE__ */ d("title", { id: o, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.375 4.5v9.75a1.875 1.875 0 0 1-1.875 1.875h-8.914a1.125 1.125 0 0 1-1.632 1.546L7.08 15.796a1.125 1.125 0 0 1 0-1.594l1.875-1.875a1.125 1.125 0 0 1 1.632 1.548h8.539v-9h-9.75a1.125 1.125 0 0 1-2.25 0V4.5A1.875 1.875 0 0 1 9 2.625h10.5A1.875 1.875 0 0 1 21.375 4.5M15.75 18a1.125 1.125 0 0 0-1.125 1.125h-9.75v-9h8.539a1.125 1.125 0 0 0 1.632 1.546l1.875-1.875a1.125 1.125 0 0 0 0-1.594l-1.875-1.875a1.125 1.125 0 0 0-1.632 1.548H4.5A1.875 1.875 0 0 0 2.625 9.75v9.75A1.875 1.875 0 0 0 4.5 21.375H15a1.875 1.875 0 0 0 1.875-1.875v-.375A1.125 1.125 0 0 0 15.75 18" })
  ] });
});
s.displayName = "Swap";
export {
  s as Swap
};
//# sourceMappingURL=Swap.js.map
