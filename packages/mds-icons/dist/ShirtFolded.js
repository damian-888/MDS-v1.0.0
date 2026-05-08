import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: d = "1em",
  title: r,
  titleId: e,
  ...i
}, a) => {
  const h = m(), l = r ? e ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: d, height: d, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": l, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: l, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M18.75 3.375h-2.156l-1.173-1.17a1.12 1.12 0 0 0-.796-.33h-5.25a1.13 1.13 0 0 0-.796.33l-1.173 1.17H5.25A1.875 1.875 0 0 0 3.375 5.25V19.5a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875M9 4.969l.687-.687 1.452 2.487L9 8.858zm3.86 1.8 1.453-2.49.687.69v3.888zM5.626 5.625H6.75V9.75a1.875 1.875 0 0 0 3.195 1.332l.93-.91v8.953h-5.25zm12.75 13.5h-5.25v-8.953l.93.908a1.875 1.875 0 0 0 3.195-1.33V5.625h1.125z" })
  ] });
});
s.displayName = "ShirtFolded";
export {
  s as ShirtFolded
};
//# sourceMappingURL=ShirtFolded.js.map
