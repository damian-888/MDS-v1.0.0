import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const v = m(({
  size: e = "1em",
  title: a,
  titleId: i,
  ...d
}, h) => {
  const l = n(), o = a ? i ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": o, ...d, children: [
    a ? /* @__PURE__ */ r("title", { id: o, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M14.625 3.75A1.125 1.125 0 0 1 13.5 4.875h-3a1.125 1.125 0 1 1 0-2.25h3a1.125 1.125 0 0 1 1.125 1.125M13.5 19.125h-3a1.125 1.125 0 1 0 0 2.25h3a1.125 1.125 0 1 0 0-2.25m6-16.5h-2.25a1.125 1.125 0 0 0 0 2.25h1.875V6.75a1.125 1.125 0 1 0 2.25 0V4.5A1.875 1.875 0 0 0 19.5 2.625m.75 6.75a1.125 1.125 0 0 0-1.125 1.125v3a1.125 1.125 0 1 0 2.25 0v-3a1.125 1.125 0 0 0-1.125-1.125m0 6.75a1.125 1.125 0 0 0-1.125 1.125v1.875H17.25a1.125 1.125 0 1 0 0 2.25h2.25a1.875 1.875 0 0 0 1.875-1.875v-2.25a1.125 1.125 0 0 0-1.125-1.125m-16.5-1.5A1.125 1.125 0 0 0 4.875 13.5v-3a1.125 1.125 0 1 0-2.25 0v3a1.125 1.125 0 0 0 1.125 1.125m3 4.5H4.875V17.25a1.125 1.125 0 0 0-2.25 0v2.25A1.875 1.875 0 0 0 4.5 21.375h2.25a1.125 1.125 0 1 0 0-2.25m0-16.5H4.5A1.875 1.875 0 0 0 2.625 4.5v2.25a1.125 1.125 0 0 0 2.25 0V4.875H6.75a1.125 1.125 0 0 0 0-2.25" })
  ] });
});
v.displayName = "Selection";
export {
  v as Selection
};
//# sourceMappingURL=Selection.js.map
