import { jsxs as l, jsx as v } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const m = t(({
  size: h = "1em",
  title: a,
  titleId: o,
  ...d
}, e) => {
  const i = n(), r = a ? o ?? i : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: h, height: h, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ v("title", { id: r, children: a }) : null,
    /* @__PURE__ */ v("path", { fill: "currentColor", d: "M14.625 8.25h-5.25A1.125 1.125 0 0 0 8.25 9.375v5.25a1.125 1.125 0 0 0 1.125 1.125h5.25a1.125 1.125 0 0 0 1.125-1.125v-5.25a1.125 1.125 0 0 0-1.125-1.125M13.5 13.5h-3v-3h3zm8.25-.375h-1.125v-2.25h1.125a1.125 1.125 0 1 0 0-2.25h-1.125V5.25a1.875 1.875 0 0 0-1.875-1.875h-3.375V2.25a1.125 1.125 0 1 0-2.25 0v1.125h-2.25V2.25a1.125 1.125 0 1 0-2.25 0v1.125H5.25A1.875 1.875 0 0 0 3.375 5.25v3.375H2.25a1.125 1.125 0 0 0 0 2.25h1.125v2.25H2.25a1.125 1.125 0 1 0 0 2.25h1.125v3.375a1.875 1.875 0 0 0 1.875 1.875h3.375v1.125a1.125 1.125 0 0 0 2.25 0v-1.125h2.25v1.125a1.125 1.125 0 1 0 2.25 0v-1.125h3.375a1.875 1.875 0 0 0 1.875-1.875v-3.375h1.125a1.125 1.125 0 1 0 0-2.25m-3.375 5.25H5.625V5.625h12.75z" })
  ] });
});
m.displayName = "Cpu";
export {
  m as Cpu
};
//# sourceMappingURL=Cpu.js.map
