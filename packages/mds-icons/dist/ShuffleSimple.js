import { jsxs as h, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const f = n(({
  size: e = "1em",
  title: l,
  titleId: i,
  ...o
}, d) => {
  const t = m(), r = l ? i ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    l ? /* @__PURE__ */ a("title", { id: r, children: l }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M20.625 4.501v3.75a1.125 1.125 0 0 1-2.25 0V7.22l-2.928 2.925a1.127 1.127 0 0 1-1.594-1.594l2.928-2.925H15.75a1.125 1.125 0 1 1 0-2.25h3.75a1.125 1.125 0 0 1 1.125 1.125M19.5 14.626a1.125 1.125 0 0 0-1.125 1.125v1.031L5.295 3.705A1.127 1.127 0 1 0 3.703 5.3l13.08 13.077H15.75a1.125 1.125 0 1 0 0 2.25h3.75a1.125 1.125 0 0 0 1.125-1.125v-3.75a1.125 1.125 0 0 0-1.125-1.125m-10.947-.769-4.849 4.848A1.127 1.127 0 1 0 5.298 20.3l4.848-4.849a1.127 1.127 0 0 0-1.594-1.594z" })
  ] });
});
f.displayName = "ShuffleSimple";
export {
  f as ShuffleSimple
};
//# sourceMappingURL=ShuffleSimple.js.map
