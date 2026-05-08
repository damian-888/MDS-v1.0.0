import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: l = "1em",
  title: r,
  titleId: o,
  ...d
}, a) => {
  const t = s(), e = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M16.5 12a1.12 1.12 0 0 1-.485.925L11.14 16.3a1.125 1.125 0 0 1-1.765-.925v-6.75A1.125 1.125 0 0 1 11.14 7.7l4.875 3.375A1.13 1.13 0 0 1 16.5 12m5.625 0A10.124 10.124 0 1 1 12 1.875 10.136 10.136 0 0 1 22.125 12m-2.25 0A7.875 7.875 0 1 0 12 19.875 7.883 7.883 0 0 0 19.875 12" })
  ] });
});
c.displayName = "PlayCircle";
export {
  c as PlayCircle
};
//# sourceMappingURL=PlayCircle.js.map
