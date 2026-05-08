import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: o = "1em",
  title: e,
  titleId: d,
  ...l
}, a) => {
  const t = s(), r = e ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: a, "aria-labelledby": r, ...l, children: [
    e ? /* @__PURE__ */ i("title", { id: r, children: e }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M13.5 1.125h-3A6.38 6.38 0 0 0 4.125 7.5v9a6.38 6.38 0 0 0 6.375 6.375h3a6.38 6.38 0 0 0 6.375-6.375v-9A6.38 6.38 0 0 0 13.5 1.125M17.625 16.5a4.13 4.13 0 0 1-4.125 4.125h-3A4.13 4.13 0 0 1 6.375 16.5v-9A4.13 4.13 0 0 1 10.5 3.375h3A4.13 4.13 0 0 1 17.625 7.5zM13.125 6v4.5a1.125 1.125 0 1 1-2.25 0V6a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
m.displayName = "MouseSimple";
export {
  m as MouseSimple
};
//# sourceMappingURL=MouseSimple.js.map
