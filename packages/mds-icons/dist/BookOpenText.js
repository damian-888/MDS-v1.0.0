import { jsxs as l, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: a = "1em",
  title: o,
  titleId: d,
  ...i
}, t) => {
  const h = m(), e = o ? d ?? h : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: t, "aria-labelledby": e, ...i, children: [
    o ? /* @__PURE__ */ r("title", { id: e, children: o }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M21.75 4.125H15a4.11 4.11 0 0 0-3 1.298 4.11 4.11 0 0 0-3-1.298H2.25A1.125 1.125 0 0 0 1.125 5.25v13.5a1.125 1.125 0 0 0 1.125 1.125H9a1.875 1.875 0 0 1 1.875 1.875 1.125 1.125 0 1 0 2.25 0A1.875 1.875 0 0 1 15 19.875h6.75a1.125 1.125 0 0 0 1.125-1.125V5.25a1.125 1.125 0 0 0-1.125-1.125M9 17.625H3.375V6.375H9a1.875 1.875 0 0 1 1.875 1.875v9.826A4.1 4.1 0 0 0 9 17.625m11.625 0H15c-.652 0-1.295.155-1.875.453V8.25A1.875 1.875 0 0 1 15 6.375h5.625zM15.375 9h3a1.125 1.125 0 0 1 0 2.25h-3a1.125 1.125 0 1 1 0-2.25m4.125 4.875A1.125 1.125 0 0 1 18.375 15h-3a1.125 1.125 0 1 1 0-2.25h3a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
s.displayName = "BookOpenText";
export {
  s as BookOpenText
};
//# sourceMappingURL=BookOpenText.js.map
