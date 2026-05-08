import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...e
}, l) => {
  const h = s(), o = r ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ i("title", { id: o, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M17.625 9.75a1.125 1.125 0 0 1-1.125 1.125h-9a1.125 1.125 0 1 1 0-2.25h9a1.125 1.125 0 0 1 1.125 1.125m6.366 2.59a7.15 7.15 0 0 1-6.889 6.785h-.158c-1.354 0-2.753-.542-4.273-1.654a1.13 1.13 0 0 0-1.343 0c-1.578 1.155-3.026 1.695-4.431 1.654A7.15 7.15 0 0 1 .008 12.34a7.125 7.125 0 0 1 7.117-7.465h9.75a7.125 7.125 0 0 1 7.116 7.465m-3.59-3.706a4.84 4.84 0 0 0-3.526-1.509h-9.75a4.875 4.875 0 0 0-4.87 5.11 4.893 4.893 0 0 0 4.712 4.64c.883.027 1.875-.375 3.033-1.219a3.38 3.38 0 0 1 4 0c1.158.844 2.147 1.246 3.032 1.219a4.893 4.893 0 0 0 4.712-4.639 4.84 4.84 0 0 0-1.342-3.602" })
  ] });
});
c.displayName = "Visor";
export {
  c as Visor
};
//# sourceMappingURL=Visor.js.map
