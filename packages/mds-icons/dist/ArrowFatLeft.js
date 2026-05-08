import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const v = h(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...l
}, t) => {
  const i = s(), a = r ? d ?? i : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": a, ...l, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M19.5 6.375h-7.125V3a1.126 1.126 0 0 0-1.921-.795l-9 9a1.127 1.127 0 0 0 0 1.594l9 9a1.125 1.125 0 0 0 1.92-.8v-3.374H19.5a1.875 1.875 0 0 0 1.875-1.875v-7.5A1.875 1.875 0 0 0 19.5 6.375m-.375 9H11.25a1.125 1.125 0 0 0-1.125 1.125v1.781L3.844 12l6.28-6.281v1.78a1.125 1.125 0 0 0 1.126 1.126h7.875z" })
  ] });
});
v.displayName = "ArrowFatLeft";
export {
  v as ArrowFatLeft
};
//# sourceMappingURL=ArrowFatLeft.js.map
