import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const m = s(({
  size: d = "1em",
  title: r,
  titleId: o,
  ...t
}, a) => {
  const i = c(), l = r ? o ?? i : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: d, height: d, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": l, ...t, children: [
    r ? /* @__PURE__ */ e("title", { id: l, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m21.355 4.933-9-3a1.1 1.1 0 0 0-.71 0l-9 3A1.125 1.125 0 0 0 1.874 6v7.5a1.125 1.125 0 1 0 2.25 0V7.561l2.223.74a6.37 6.37 0 0 0 1.726 7.97 9.4 9.4 0 0 0-3.762 3.364 1.125 1.125 0 1 0 1.885 1.23c1.337-2.06 3.459-3.24 5.803-3.24s4.465 1.18 5.808 3.24a1.126 1.126 0 1 0 1.884-1.23 9.4 9.4 0 0 0-3.767-3.367 6.37 6.37 0 0 0 1.727-7.969l3.703-1.235a1.125 1.125 0 0 0 0-2.133zM12 4.183 17.442 6 12 7.814 6.562 6zm4.125 7.067a4.125 4.125 0 1 1-7.6-2.223l3.12 1.04c.23.078.48.078.71 0l3.12-1.04c.425.664.65 1.435.65 2.223" })
  ] });
});
m.displayName = "Student";
export {
  m as Student
};
//# sourceMappingURL=Student.js.map
