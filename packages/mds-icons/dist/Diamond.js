import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...a
}, e) => {
  const n = s(), d = o ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: e, "aria-labelledby": d, ...a, children: [
    o ? /* @__PURE__ */ l("title", { id: d, children: o }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "m22.327 10.676-9.005-9.005a1.875 1.875 0 0 0-2.645 0l-9 9.005a1.875 1.875 0 0 0 0 2.646l9.005 9.006a1.875 1.875 0 0 0 2.644 0l9-9.006a1.875 1.875 0 0 0 0-2.646zM12 20.468l-8.468-8.469L12 3.531l8.467 8.468z" })
  ] });
});
h.displayName = "Diamond";
export {
  h as Diamond
};
//# sourceMappingURL=Diamond.js.map
