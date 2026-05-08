import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as v } from "react";
const w = s(({
  size: o = "1em",
  title: r,
  titleId: a,
  ...e
}, l) => {
  const t = v(), d = r ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": d, ...e, children: [
    r ? /* @__PURE__ */ i("title", { id: d, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M18.75 2.626a1.125 1.125 0 0 0-1.125 1.125v5.812L6.989 2.907A1.875 1.875 0 0 0 4.125 4.49v15.022a1.875 1.875 0 0 0 2.864 1.583l10.636-6.657v5.813a1.125 1.125 0 1 0 2.25 0V3.75a1.125 1.125 0 0 0-1.125-1.125M6.375 18.819V5.182l10.903 6.819z" })
  ] });
});
w.displayName = "SkipForward";
export {
  w as SkipForward
};
//# sourceMappingURL=SkipForward.js.map
