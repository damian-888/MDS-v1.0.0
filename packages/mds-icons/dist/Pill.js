import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: r = "1em",
  title: l,
  titleId: o,
  ...d
}, e) => {
  const t = s(), a = l ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: e, "aria-labelledby": a, ...d, children: [
    l ? /* @__PURE__ */ i("title", { id: a, children: l }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M20.555 3.448a5.37 5.37 0 0 0-7.594 0l-9.514 9.514a5.37 5.37 0 0 0 7.594 7.594l9.514-9.517a5.375 5.375 0 0 0 0-7.591M9.448 18.962a3.118 3.118 0 1 1-4.407-4.406L9 10.594 13.406 15zm9.515-9.514L15 13.407 10.593 9l3.963-3.962a3.118 3.118 0 0 1 4.406 4.407zm-.916-2.369a1.125 1.125 0 0 1 0 1.594l-2.25 2.25a1.13 1.13 0 0 1-1.593 0 1.13 1.13 0 0 1 0-1.594l2.25-2.25a1.124 1.124 0 0 1 1.593 0" })
  ] });
});
h.displayName = "Pill";
export {
  h as Pill
};
//# sourceMappingURL=Pill.js.map
