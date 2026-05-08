import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...e
}, l) => {
  const n = s(), a = r ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": a, ...e, children: [
    r ? /* @__PURE__ */ d("title", { id: a, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M15 3.375a8.63 8.63 0 0 0-7.594 4.534 6.375 6.375 0 1 0-.656 12.716H15a8.625 8.625 0 1 0 0-17.25m0 15H6.75a4.126 4.126 0 0 1-.17-8.25A8.6 8.6 0 0 0 6.374 12a1.125 1.125 0 0 0 2.25 0A6.375 6.375 0 1 1 15 18.375m-1.125-7.125v-3a1.125 1.125 0 0 1 2.25 0v3a1.125 1.125 0 1 1-2.25 0M16.5 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
h.displayName = "CloudWarning";
export {
  h as CloudWarning
};
//# sourceMappingURL=CloudWarning.js.map
