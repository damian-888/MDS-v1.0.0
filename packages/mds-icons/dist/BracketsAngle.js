import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const c = s(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const t = m(), l = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ a("title", { id: l, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m8.45 4.353-4.866 7.646 4.865 7.646a1.124 1.124 0 1 1-1.897 1.208l-5.25-8.25a1.13 1.13 0 0 1 0-1.208l5.25-8.25a1.125 1.125 0 0 1 1.897 1.208m14.25 7.042-5.25-8.25a1.126 1.126 0 1 0-1.898 1.208l4.865 7.646-4.865 7.646a1.126 1.126 0 1 0 1.897 1.208l5.25-8.25a1.13 1.13 0 0 0 0-1.208" })
  ] });
});
c.displayName = "BracketsAngle";
export {
  c as BracketsAngle
};
//# sourceMappingURL=BracketsAngle.js.map
