import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as w, useId as h } from "react";
const s = w(({
  size: o = "1em",
  title: r,
  titleId: a,
  ...d
}, i) => {
  const t = h(), e = r ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: e, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M22.125 10.5a6.38 6.38 0 0 1-6.375 6.375H5.719l2.58 2.58a1.126 1.126 0 0 1-.797 1.923 1.13 1.13 0 0 1-.797-.33l-4.5-4.5a1.125 1.125 0 0 1 0-1.594l4.5-4.5a1.126 1.126 0 0 1 1.838 1.228q-.087.207-.244.366l-2.58 2.577h10.03a4.125 4.125 0 0 0 0-8.25H7.5a1.125 1.125 0 0 1 0-2.25h8.25a6.38 6.38 0 0 1 6.376 6.375" })
  ] });
});
s.displayName = "ArrowUDownLeft";
export {
  s as ArrowUDownLeft
};
//# sourceMappingURL=ArrowUDownLeft.js.map
