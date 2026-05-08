import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: l = "1em",
  title: r,
  titleId: d,
  ...a
}, i) => {
  const t = s(), o = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...a, children: [
    r ? /* @__PURE__ */ e("title", { id: o, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M8.625 21.001a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0m11.625-1.875a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75m2.25-3.375H5.625v-8.69a1.86 1.86 0 0 0-.55-1.325l-2.03-2.03a1.127 1.127 0 1 0-1.593 1.593l1.923 1.92v8.532H3a1.125 1.125 0 1 0 0 2.25h19.5a1.125 1.125 0 0 0 0-2.25" })
  ] });
});
h.displayName = "Trolley";
export {
  h as Trolley
};
//# sourceMappingURL=Trolley.js.map
