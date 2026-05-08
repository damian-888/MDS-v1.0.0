import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const h = n(), l = a ? o ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": l, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: l, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M16.125 12.75A1.125 1.125 0 0 1 15 13.875h-1.875v1.875a1.125 1.125 0 1 1-2.25 0v-1.875H9a1.125 1.125 0 1 1 0-2.25h1.875V9.75a1.125 1.125 0 1 1 2.25 0v1.875H15a1.125 1.125 0 0 1 1.125 1.125m6-5.25V18a2.625 2.625 0 0 1-2.625 2.625h-15A2.625 2.625 0 0 1 1.875 18V7.5A2.625 2.625 0 0 1 4.5 4.875h2.398l.943-1.415a1.88 1.88 0 0 1 1.56-.835H14.6a1.88 1.88 0 0 1 1.56.835l.943 1.415H19.5A2.625 2.625 0 0 1 22.125 7.5m-2.25 0a.375.375 0 0 0-.375-.375h-3a1.13 1.13 0 0 1-.937-.5l-1.165-1.75H9.602l-1.165 1.75a1.13 1.13 0 0 1-.937.5h-3a.375.375 0 0 0-.375.375V18a.375.375 0 0 0 .375.375h15a.375.375 0 0 0 .375-.375z" })
  ] });
});
s.displayName = "CameraPlus";
export {
  s as CameraPlus
};
//# sourceMappingURL=CameraPlus.js.map
