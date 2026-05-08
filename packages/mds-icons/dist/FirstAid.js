import { jsxs as l, jsx as o } from "react/jsx-runtime";
import { forwardRef as v, useId as n } from "react";
const s = v(({
  size: i = "1em",
  title: r,
  titleId: a,
  ...e
}, h) => {
  const t = n(), d = r ? a ?? t : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: h, "aria-labelledby": d, ...e, children: [
    r ? /* @__PURE__ */ o("title", { id: d, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.25 7.875h-4.125V3.75a1.875 1.875 0 0 0-1.875-1.875h-4.5A1.875 1.875 0 0 0 7.875 3.75v4.125H3.75A1.875 1.875 0 0 0 1.875 9.75v4.5a1.875 1.875 0 0 0 1.875 1.875h4.125v4.125a1.875 1.875 0 0 0 1.875 1.875h4.5a1.875 1.875 0 0 0 1.875-1.875v-4.125h4.125a1.875 1.875 0 0 0 1.875-1.875v-4.5a1.875 1.875 0 0 0-1.875-1.875m-.375 6H15A1.125 1.125 0 0 0 13.875 15v4.875h-3.75V15A1.125 1.125 0 0 0 9 13.875H4.125v-3.75H9A1.125 1.125 0 0 0 10.125 9V4.125h3.75V9A1.125 1.125 0 0 0 15 10.125h4.875z" })
  ] });
});
s.displayName = "FirstAid";
export {
  s as FirstAid
};
//# sourceMappingURL=FirstAid.js.map
