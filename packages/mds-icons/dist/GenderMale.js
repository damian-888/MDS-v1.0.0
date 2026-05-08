import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: r = "1em",
  title: e,
  titleId: o,
  ...a
}, i) => {
  const n = s(), d = e ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: i, "aria-labelledby": d, ...a, children: [
    e ? /* @__PURE__ */ l("title", { id: d, children: e }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M20.25 2.625h-4.5a1.125 1.125 0 1 0 0 2.25h1.78l-3.067 3.07a7.875 7.875 0 1 0 1.594 1.593l3.068-3.07V8.25a1.125 1.125 0 1 0 2.25 0v-4.5a1.125 1.125 0 0 0-1.125-1.125m-6.524 15.606a5.625 5.625 0 1 1 0-7.957 5.634 5.634 0 0 1 0 7.957" })
  ] });
});
m.displayName = "GenderMale";
export {
  m as GenderMale
};
//# sourceMappingURL=GenderMale.js.map
