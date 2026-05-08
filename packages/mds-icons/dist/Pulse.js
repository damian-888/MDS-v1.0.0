import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: l = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const h = s(), a = r ? o ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": a, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M22.875 11.998a1.125 1.125 0 0 1-1.125 1.125h-2.304l-3.44 6.879a1.13 1.13 0 0 1-1.006.621h-.056a1.12 1.12 0 0 1-.995-.724L8.906 6.67l-2.632 5.798a1.12 1.12 0 0 1-1.024.656h-3a1.125 1.125 0 1 1 0-2.25h2.275L7.976 3.28a1.125 1.125 0 0 1 2.075.066l5.089 13.356 2.604-5.21a1.12 1.12 0 0 1 1.006-.618h3a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
m.displayName = "Pulse";
export {
  m as Pulse
};
//# sourceMappingURL=Pulse.js.map
