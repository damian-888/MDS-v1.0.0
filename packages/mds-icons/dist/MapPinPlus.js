import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const h = s(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...e
}, l) => {
  const n = c(), i = a ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": i, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: i, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M16.125 9.75A1.125 1.125 0 0 1 15 10.875h-1.875v1.875a1.125 1.125 0 1 1-2.25 0v-1.875H9a1.125 1.125 0 1 1 0-2.25h1.875V6.75a1.125 1.125 0 1 1 2.25 0v1.875H15a1.125 1.125 0 0 1 1.125 1.125m4.5 0c0 3.036-1.392 6.24-4.026 9.27a24.3 24.3 0 0 1-3.954 3.655 1.125 1.125 0 0 1-1.29 0c-.326-.231-7.98-5.672-7.98-12.925a8.625 8.625 0 0 1 17.25 0m-2.25 0a6.375 6.375 0 1 0-12.75 0c0 3.123 1.875 5.94 3.44 7.754A23.4 23.4 0 0 0 12 20.334a23.4 23.4 0 0 0 2.934-2.83c1.566-1.813 3.441-4.631 3.441-7.754" })
  ] });
});
h.displayName = "MapPinPlus";
export {
  h as MapPinPlus
};
//# sourceMappingURL=MapPinPlus.js.map
