import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const v = s(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...i
}, l) => {
  const t = m(), d = r ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": d, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: d, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m23.138 10.433-8.266-5.266A1.867 1.867 0 0 0 12 6.734v2.813l-6.878-4.38A1.867 1.867 0 0 0 2.25 6.734v10.53a1.868 1.868 0 0 0 2.872 1.568L12 14.45v2.812a1.87 1.87 0 0 0 2.872 1.568l8.266-5.266a1.855 1.855 0 0 0 0-3.133M4.5 16.559V7.44L11.66 12zm9.75 0V7.44L21.41 12z" })
  ] });
});
v.displayName = "FastForward";
export {
  v as FastForward
};
//# sourceMappingURL=FastForward.js.map
