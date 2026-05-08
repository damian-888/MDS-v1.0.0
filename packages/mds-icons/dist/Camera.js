import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const h = m(), e = a ? o ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    a ? /* @__PURE__ */ l("title", { id: e, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M19.5 4.875h-2.398l-1.165-1.75a1.13 1.13 0 0 0-.937-.5H9a1.13 1.13 0 0 0-.937.5l-1.166 1.75H4.5A2.625 2.625 0 0 0 1.875 7.5V18A2.625 2.625 0 0 0 4.5 20.625h15A2.625 2.625 0 0 0 22.125 18V7.5A2.625 2.625 0 0 0 19.5 4.875M19.875 18a.375.375 0 0 1-.375.375h-15A.375.375 0 0 1 4.125 18V7.5a.375.375 0 0 1 .375-.375h3a1.13 1.13 0 0 0 .938-.5l1.164-1.75h4.795l1.165 1.75a1.13 1.13 0 0 0 .938.5h3a.375.375 0 0 1 .375.375zM12 7.875a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m0 6.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5" })
  ] });
});
s.displayName = "Camera";
export {
  s as Camera
};
//# sourceMappingURL=Camera.js.map
