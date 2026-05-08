import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: l = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const h = s(), r = a ? o ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M5.333 2.994a1.125 1.125 0 1 0-1.666 1.513l.376.41A2.625 2.625 0 0 0 1.875 7.5V18A2.625 2.625 0 0 0 4.5 20.625h13.82l.348.382a1.125 1.125 0 0 0 1.665-1.513zm4.626 8.437 2.791 3.067a2.25 2.25 0 0 1-2.79-3.07zM4.5 18.375A.375.375 0 0 1 4.125 18V7.5a.375.375 0 0 1 .375-.375h1.548l2.336 2.57a4.5 4.5 0 0 0 5.938 6.532l1.953 2.148zM22.125 7.5v8.826a1.125 1.125 0 1 1-2.25 0V7.5a.375.375 0 0 0-.375-.375h-3a1.13 1.13 0 0 1-.937-.5l-1.166-1.75H9.568a1.125 1.125 0 0 1 0-2.25H15a1.13 1.13 0 0 1 .938.5l1.164 1.75H19.5A2.625 2.625 0 0 1 22.125 7.5" })
  ] });
});
m.displayName = "CameraSlash";
export {
  m as CameraSlash
};
//# sourceMappingURL=CameraSlash.js.map
