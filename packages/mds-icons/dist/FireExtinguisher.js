import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: i = "1em",
  title: r,
  titleId: o,
  ...d
}, v) => {
  const l = h(), a = r ? o ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: v, "aria-labelledby": a, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m20.573 4.174-4.629-1.389 1.4-.634a1.127 1.127 0 0 0-.938-2.049L12.49 1.883a7.883 7.883 0 0 0-7.614 7.868v9.75a1.125 1.125 0 0 0 2.25 0v-2.625h1.5v4.875a1.875 1.875 0 0 0 1.875 1.875H15a1.875 1.875 0 0 0 1.875-1.875v-12a4.13 4.13 0 0 0-3-3.968v-1.27l6.052 1.816q.158.048.323.047a1.125 1.125 0 0 0 .323-2.202M7.125 14.626V9.75a5.634 5.634 0 0 1 4.5-5.512v1.544a4.13 4.13 0 0 0-3 3.968v4.875zm3.75 6.75v-4.5h3.75v4.5zm3.75-11.625v4.875h-3.75V9.75a1.875 1.875 0 1 1 3.75 0" })
  ] });
});
s.displayName = "FireExtinguisher";
export {
  s as FireExtinguisher
};
//# sourceMappingURL=FireExtinguisher.js.map
