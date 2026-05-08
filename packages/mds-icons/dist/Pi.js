import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: i = "1em",
  title: r,
  titleId: e,
  ...a
}, l) => {
  const t = s(), o = r ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...a, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M22.125 16.125a3.75 3.75 0 0 1-7.5 0v-9h-5.25V18.75a1.125 1.125 0 0 1-2.25 0V7.125H6.75A3.375 3.375 0 0 0 3.375 10.5a1.125 1.125 0 0 1-2.25 0A5.63 5.63 0 0 1 6.75 4.875H21a1.125 1.125 0 0 1 0 2.25h-4.125v9a1.5 1.5 0 1 0 3 0 1.125 1.125 0 1 1 2.25 0" })
  ] });
});
m.displayName = "Pi";
export {
  m as Pi
};
//# sourceMappingURL=Pi.js.map
