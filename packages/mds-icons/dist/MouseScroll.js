import { jsxs as h, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: o = "1em",
  title: l,
  titleId: e,
  ...d
}, i) => {
  const t = s(), r = l ? e ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    l ? /* @__PURE__ */ a("title", { id: r, children: l }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M13.5 1.125h-3A6.38 6.38 0 0 0 4.125 7.5v9a6.38 6.38 0 0 0 6.375 6.375h3a6.38 6.38 0 0 0 6.375-6.375v-9A6.38 6.38 0 0 0 13.5 1.125M17.625 16.5a4.13 4.13 0 0 1-4.125 4.125h-3A4.13 4.13 0 0 1 6.375 16.5v-9A4.13 4.13 0 0 1 10.5 3.375h3A4.13 4.13 0 0 1 17.625 7.5zm-4.5-7.781v6.562l.33-.33a1.127 1.127 0 1 1 1.593 1.594l-2.25 2.25a1.125 1.125 0 0 1-1.594 0l-2.25-2.25a1.127 1.127 0 1 1 1.594-1.594l.327.33V8.72l-.33.33a1.127 1.127 0 1 1-1.593-1.594l2.25-2.25a1.125 1.125 0 0 1 1.594 0l2.25 2.25a1.127 1.127 0 1 1-1.594 1.594z" })
  ] });
});
v.displayName = "MouseScroll";
export {
  v as MouseScroll
};
//# sourceMappingURL=MouseScroll.js.map
