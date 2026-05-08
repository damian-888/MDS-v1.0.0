import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const p = h(({
  size: o = "1em",
  title: i,
  titleId: l,
  ...d
}, n) => {
  const t = m(), r = i ? l ?? t : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: n, "aria-labelledby": r, ...d, children: [
    i ? /* @__PURE__ */ e("title", { id: r, children: i }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M19.875 3a1.125 1.125 0 0 1-1.125 1.125H5.25a1.125 1.125 0 0 1 0-2.25h13.5A1.125 1.125 0 0 1 19.875 3m-3 4.5V21A1.875 1.875 0 0 1 15 22.875H9A1.875 1.875 0 0 1 7.125 21V7.5A1.875 1.875 0 0 1 9 5.625h6A1.875 1.875 0 0 1 16.875 7.5m-2.25.375h-5.25v12.75h5.25z" })
  ] });
});
p.displayName = "AlignTopSimple";
export {
  p as AlignTopSimple
};
//# sourceMappingURL=AlignTopSimple.js.map
