import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const m = s(({
  size: i = "1em",
  title: r,
  titleId: d,
  ...e
}, l) => {
  const t = c(), o = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M18.914 2.861a1.88 1.88 0 0 0-1.903.05L6.375 9.563V3.75a1.125 1.125 0 0 0-2.25 0v16.5a1.125 1.125 0 0 0 2.25 0v-5.812l10.636 6.656a1.875 1.875 0 0 0 2.864-1.583V4.49a1.86 1.86 0 0 0-.96-1.628m-1.289 15.957L6.722 12l10.903-6.818z" })
  ] });
});
m.displayName = "SkipBack";
export {
  m as SkipBack
};
//# sourceMappingURL=SkipBack.js.map
