import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as w, useId as s } from "react";
const c = w(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...i
}, a) => {
  const t = s(), l = r ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": l, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: l, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m23.296 6.705-3-3A1.127 1.127 0 0 0 18.702 5.3l1.079 1.077H19.5c-4.875 0-6.075 2.88-7.039 5.192-.827 1.985-1.449 3.473-4.008 3.758a4.125 4.125 0 1 0 .026 2.258c4.064-.363 5.163-3 6.06-5.15.92-2.214 1.586-3.808 4.96-3.808h.282l-1.08 1.08a1.127 1.127 0 1 0 1.594 1.593l3-3a1.123 1.123 0 0 0 0-1.594M4.5 18.376a1.875 1.875 0 1 1 0-3.75 1.875 1.875 0 0 1 0 3.75" })
  ] });
});
c.displayName = "FlowArrow";
export {
  c as FlowArrow
};
//# sourceMappingURL=FlowArrow.js.map
