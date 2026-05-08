import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...d
}, a) => {
  const t = s(), i = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: i, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m1.125 2.332a7.8 7.8 0 0 1 2.25.68v14.227a7.8 7.8 0 0 1-2.25.68zm-9 7.793a7.886 7.886 0 0 1 6.75-7.793v15.586A7.886 7.886 0 0 1 4.125 12m13.5 5.504V6.496a7.857 7.857 0 0 1 0 11.008" })
  ] });
});
c.displayName = "CircleHalf";
export {
  c as CircleHalf
};
//# sourceMappingURL=CircleHalf.js.map
