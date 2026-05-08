import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: l = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const h = s(), r = a ? o ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M2.25 16.875h19.5a1.125 1.125 0 1 0 0-2.25h-.383a9.39 9.39 0 0 0-8.242-8.933V4.126h1.125a1.125 1.125 0 0 0 0-2.25h-4.5a1.125 1.125 0 0 0 0 2.25h1.125v1.568a9.39 9.39 0 0 0-8.242 8.932H2.25a1.125 1.125 0 1 0 0 2.25m9.75-9a7.133 7.133 0 0 1 7.115 6.75H4.885A7.134 7.134 0 0 1 12 7.875M22.875 19.5a1.125 1.125 0 0 1-1.125 1.125H2.25a1.125 1.125 0 1 1 0-2.25h19.5a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
m.displayName = "CallBell";
export {
  m as CallBell
};
//# sourceMappingURL=CallBell.js.map
