import { jsxs as a, jsx as r } from "react/jsx-runtime";
import { forwardRef as l, useId as m } from "react";
const t = l(({
  size: o = "1em",
  title: h,
  titleId: d,
  ...i
}, e) => {
  const n = m(), v = h ? d ?? n : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": h ? void 0 : !0, role: h ? "img" : void 0, ref: e, "aria-labelledby": v, ...i, children: [
    h ? /* @__PURE__ */ r("title", { id: v, children: h }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M19.5 9.375A1.875 1.875 0 0 0 21.375 7.5v-3A1.875 1.875 0 0 0 19.5 2.625h-3A1.875 1.875 0 0 0 14.625 4.5v.375h-5.25V4.5A1.875 1.875 0 0 0 7.5 2.625h-3A1.875 1.875 0 0 0 2.625 4.5v3A1.875 1.875 0 0 0 4.5 9.375h.375v5.25H4.5A1.875 1.875 0 0 0 2.625 16.5v3A1.875 1.875 0 0 0 4.5 21.375h3A1.875 1.875 0 0 0 9.375 19.5v-.375h5.25v.375a1.875 1.875 0 0 0 1.875 1.875h3a1.875 1.875 0 0 0 1.875-1.875v-3a1.875 1.875 0 0 0-1.875-1.875h-.375v-5.25zm-2.625-4.5h2.25v2.25h-2.25zm-12 0h2.25v2.25h-2.25zm2.25 14.25h-2.25v-2.25h2.25zm12 0h-2.25v-2.25h2.25zm-2.25-4.5H16.5a1.875 1.875 0 0 0-1.875 1.875v.375h-5.25V16.5A1.875 1.875 0 0 0 7.5 14.625h-.375v-5.25H7.5A1.875 1.875 0 0 0 9.375 7.5v-.375h5.25V7.5A1.875 1.875 0 0 0 16.5 9.375h.375z" })
  ] });
});
t.displayName = "BoundingBox";
export {
  t as BoundingBox
};
//# sourceMappingURL=BoundingBox.js.map
