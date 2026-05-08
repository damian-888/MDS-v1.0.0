import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: r = "1em",
  title: o,
  titleId: a,
  ...i
}, l) => {
  const n = s(), e = o ? a ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": e, ...i, children: [
    o ? /* @__PURE__ */ d("title", { id: e, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.75 4.125H15a4.11 4.11 0 0 0-3 1.298 4.11 4.11 0 0 0-3-1.298H2.25A1.125 1.125 0 0 0 1.125 5.25v13.5a1.125 1.125 0 0 0 1.125 1.125H9a1.875 1.875 0 0 1 1.875 1.875 1.125 1.125 0 1 0 2.25 0A1.875 1.875 0 0 1 15 19.875h6.75a1.125 1.125 0 0 0 1.125-1.125V5.25a1.125 1.125 0 0 0-1.125-1.125M9 17.625H3.375V6.375H9a1.875 1.875 0 0 1 1.875 1.875v9.826A4.1 4.1 0 0 0 9 17.625m11.625 0H15c-.652 0-1.295.155-1.875.453V8.25A1.875 1.875 0 0 1 15 6.375h5.625z" })
  ] });
});
m.displayName = "BookOpen";
export {
  m as BookOpen
};
//# sourceMappingURL=BookOpen.js.map
