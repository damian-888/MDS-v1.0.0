import { jsxs as i, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: r = "1em",
  title: a,
  titleId: l,
  ...d
}, t) => {
  const h = n(), e = a ? l ?? h : void 0;
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: t, "aria-labelledby": e, ...d, children: [
    a ? /* @__PURE__ */ o("title", { id: e, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.5 4.875h-2.398l-1.165-1.75a1.13 1.13 0 0 0-.937-.5H9a1.13 1.13 0 0 0-.937.5l-1.166 1.75H4.5A2.625 2.625 0 0 0 1.875 7.5V18A2.625 2.625 0 0 0 4.5 20.625h15A2.625 2.625 0 0 0 22.125 18V7.5A2.625 2.625 0 0 0 19.5 4.875M19.875 18a.375.375 0 0 1-.375.375h-15A.375.375 0 0 1 4.125 18V7.5a.375.375 0 0 1 .375-.375h3a1.13 1.13 0 0 0 .938-.5l1.164-1.75h4.795l1.165 1.75a1.13 1.13 0 0 0 .938.5h3a.375.375 0 0 1 .375.375zm-3-8.625v1.875a1.125 1.125 0 0 1-1.125 1.125h-1.875a1.124 1.124 0 0 1-.727-1.982 2.63 2.63 0 0 0-2.72.256A1.127 1.127 0 0 1 9.075 8.85a4.9 4.9 0 0 1 5.732-.085 1.125 1.125 0 0 1 2.069.61m-1.726 4.95a1.125 1.125 0 0 1-.223 1.575 4.85 4.85 0 0 1-2.918.97 4.9 4.9 0 0 1-2.813-.886 1.125 1.125 0 0 1-2.07-.609V13.5a1.125 1.125 0 0 1 1.125-1.125h1.875a1.124 1.124 0 0 1 .727 1.982 2.63 2.63 0 0 0 2.72-.256 1.126 1.126 0 0 1 1.577.224" })
  ] });
});
s.displayName = "CameraRotate";
export {
  s as CameraRotate
};
//# sourceMappingURL=CameraRotate.js.map
