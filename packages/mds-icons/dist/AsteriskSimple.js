import { jsxs as s, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const h = n(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...d
}, a) => {
  const t = m(), i = r ? o ?? t : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: i, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "m19.917 10.044-6.111 2.445 4.332 5.57a1.124 1.124 0 1 1-1.776 1.382L12 13.833 7.638 19.44a1.125 1.125 0 0 1-1.776-1.382l4.333-5.57-6.112-2.445a1.125 1.125 0 1 1 .835-2.088l5.957 2.383V3.75a1.125 1.125 0 1 1 2.25 0v6.589l5.957-2.383a1.125 1.125 0 1 1 .835 2.088" })
  ] });
});
h.displayName = "AsteriskSimple";
export {
  h as AsteriskSimple
};
//# sourceMappingURL=AsteriskSimple.js.map
