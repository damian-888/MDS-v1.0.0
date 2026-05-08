import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...l
}, a) => {
  const t = m(), e = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": e, ...l, children: [
    r ? /* @__PURE__ */ d("title", { id: e, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M17.25 14.625h-1.125V4.5a1.125 1.125 0 0 0-2.003-.703l-9 11.25A1.125 1.125 0 0 0 6 16.875h7.875V19.5a1.125 1.125 0 0 0 2.25 0v-2.625h1.125a1.125 1.125 0 1 0 0-2.25m-3.375 0H8.344l5.531-6.918z" })
  ] });
});
s.displayName = "NumberFour";
export {
  s as NumberFour
};
//# sourceMappingURL=NumberFour.js.map
