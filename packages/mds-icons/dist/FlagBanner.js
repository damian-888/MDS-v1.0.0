import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: l = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const n = s(), a = r ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": a, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M22.702 4.65a1.13 1.13 0 0 0-.952-.525h-18a1.125 1.125 0 0 0-.795 1.92L6.656 9.75l-3.701 3.704a1.125 1.125 0 0 0 .795 1.921h11.932l-2.447 5.141a1.126 1.126 0 1 0 2.03.968l7.5-15.75a1.13 1.13 0 0 0-.064-1.085m-5.948 8.475H6.469l2.58-2.58a1.125 1.125 0 0 0 0-1.594l-2.58-2.576h13.5z" })
  ] });
});
m.displayName = "FlagBanner";
export {
  m as FlagBanner
};
//# sourceMappingURL=FlagBanner.js.map
