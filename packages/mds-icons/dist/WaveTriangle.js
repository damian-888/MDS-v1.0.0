import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const h = s(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...o
}, d) => {
  const n = m(), l = r ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": l, ...o, children: [
    r ? /* @__PURE__ */ a("title", { id: l, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m22.662 12.658-4.875 6.75a1.126 1.126 0 0 1-1.824 0L7.125 7.174l-3.963 5.484a1.124 1.124 0 1 1-1.824-1.312l4.875-6.75a1.125 1.125 0 0 1 1.824 0l8.838 12.234 3.963-5.484a1.126 1.126 0 1 1 1.824 1.312" })
  ] });
});
h.displayName = "WaveTriangle";
export {
  h as WaveTriangle
};
//# sourceMappingURL=WaveTriangle.js.map
