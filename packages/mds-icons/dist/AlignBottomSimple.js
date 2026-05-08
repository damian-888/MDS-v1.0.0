import { jsxs as m, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: i = "1em",
  title: o,
  titleId: l,
  ...d
}, t) => {
  const a = h(), r = o ? l ?? a : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: t, "aria-labelledby": r, ...d, children: [
    o ? /* @__PURE__ */ e("title", { id: r, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M19.875 21.75a1.125 1.125 0 0 1-1.125 1.125H5.25a1.125 1.125 0 1 1 0-2.25h13.5a1.125 1.125 0 0 1 1.125 1.125m-12.75-4.5V3.75A1.875 1.875 0 0 1 9 1.875h6a1.875 1.875 0 0 1 1.875 1.875v13.5A1.875 1.875 0 0 1 15 19.125H9a1.875 1.875 0 0 1-1.875-1.875m2.25-.375h5.25V4.125h-5.25z" })
  ] });
});
s.displayName = "AlignBottomSimple";
export {
  s as AlignBottomSimple
};
//# sourceMappingURL=AlignBottomSimple.js.map
