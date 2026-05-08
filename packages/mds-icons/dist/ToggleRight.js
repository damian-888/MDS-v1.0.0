import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as g } from "react";
const m = n(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...a
}, l) => {
  const t = g(), e = o ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": e, ...a, children: [
    o ? /* @__PURE__ */ i("title", { id: e, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M16.5 4.875h-9a7.125 7.125 0 0 0 0 14.25h9a7.125 7.125 0 0 0 0-14.25m0 12h-9a4.875 4.875 0 1 1 0-9.75h9a4.875 4.875 0 1 1 0 9.75m0-8.625a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 5.25a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" })
  ] });
});
m.displayName = "ToggleRight";
export {
  m as ToggleRight
};
//# sourceMappingURL=ToggleRight.js.map
