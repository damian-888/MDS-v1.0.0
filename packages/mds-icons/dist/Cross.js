import { jsxs as s, jsx as a } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const v = t(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...h
}, i) => {
  const l = n(), d = r ? e ?? l : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": d, ...h, children: [
    r ? /* @__PURE__ */ a("title", { id: d, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M18.75 6.375h-3.375V3A1.875 1.875 0 0 0 13.5 1.125h-3A1.875 1.875 0 0 0 8.625 3v3.375H5.25A1.875 1.875 0 0 0 3.375 8.25v3a1.875 1.875 0 0 0 1.875 1.875h3.375V21a1.875 1.875 0 0 0 1.875 1.875h3A1.875 1.875 0 0 0 15.375 21v-7.875h3.375a1.875 1.875 0 0 0 1.875-1.875v-3a1.875 1.875 0 0 0-1.875-1.875m-.375 4.5H14.25A1.125 1.125 0 0 0 13.125 12v8.625h-2.25V12a1.125 1.125 0 0 0-1.125-1.125H5.625v-2.25H9.75A1.125 1.125 0 0 0 10.875 7.5V3.375h2.25V7.5a1.125 1.125 0 0 0 1.125 1.125h4.125z" })
  ] });
});
v.displayName = "Cross";
export {
  v as Cross
};
//# sourceMappingURL=Cross.js.map
