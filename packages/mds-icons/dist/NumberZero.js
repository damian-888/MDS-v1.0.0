import { jsxs as c, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const a = n(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...s
}, l) => {
  const t = m(), o = r ? i ?? t : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...s, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M17.496 5.723C16.206 3.696 14.308 2.629 12 2.629S7.794 3.696 6.504 5.723c-1.05 1.65-1.629 3.88-1.629 6.276s.578 4.625 1.63 6.276c1.29 2.028 3.19 3.1 5.495 3.1s4.206-1.072 5.496-3.1c1.05-1.651 1.629-3.88 1.629-6.276s-.578-4.625-1.63-6.276m-1.899 11.343c-.868 1.366-2.078 2.058-3.597 2.058s-2.73-.692-3.597-2.057C7.579 15.773 7.125 13.973 7.125 12s.454-3.773 1.278-5.068C9.27 5.566 10.48 4.874 12 4.874s2.73.692 3.597 2.057c.824 1.295 1.278 3.1 1.278 5.068 0 1.969-.454 3.774-1.278 5.068" })
  ] });
});
a.displayName = "NumberZero";
export {
  a as NumberZero
};
//# sourceMappingURL=NumberZero.js.map
