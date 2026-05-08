import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: o = "1em",
  title: l,
  titleId: d,
  ...i
}, a) => {
  const t = n(), r = l ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: a, "aria-labelledby": r, ...i, children: [
    l ? /* @__PURE__ */ e("title", { id: r, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m23.344 9.01-5.25-6a1.12 1.12 0 0 0-.844-.385H6.75a1.13 1.13 0 0 0-.844.384l-5.25 6a1.125 1.125 0 0 0 .025 1.509l10.5 11.25a1.123 1.123 0 0 0 1.644 0l10.5-11.25a1.125 1.125 0 0 0 .019-1.509m-3.324-.385h-2.957l-2.813-3.75h2.489zM6.74 10.875l1.986 4.969-4.637-4.969zm8.1 0L12 17.971l-2.839-7.096zM9.75 8.625l2.25-3 2.25 3zm7.511 2.25h2.65l-4.636 4.969zm-10-6H9.75l-2.813 3.75H3.98z" })
  ] });
});
s.displayName = "SketchLogo";
export {
  s as SketchLogo
};
//# sourceMappingURL=SketchLogo.js.map
