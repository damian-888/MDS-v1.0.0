import { jsxs as a, jsx as l } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: i = "1em",
  title: e,
  titleId: o,
  ...d
}, t) => {
  const n = s(), r = e ? o ?? n : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: t, "aria-labelledby": r, ...d, children: [
    e ? /* @__PURE__ */ l("title", { id: r, children: e }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M4.125 5.25v13.5a1.125 1.125 0 0 1-2.25 0V5.25a1.125 1.125 0 0 1 2.25 0M22.875 9v6A1.875 1.875 0 0 1 21 16.875H7.5A1.875 1.875 0 0 1 5.625 15V9A1.875 1.875 0 0 1 7.5 7.125H21A1.875 1.875 0 0 1 22.875 9m-2.25.375H7.875v5.25h12.75z" })
  ] });
});
h.displayName = "AlignLeftSimple";
export {
  h as AlignLeftSimple
};
//# sourceMappingURL=AlignLeftSimple.js.map
