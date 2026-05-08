import { jsxs as v, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as n } from "react";
const s = h(({
  size: i = "1em",
  title: e,
  titleId: a,
  ...d
}, l) => {
  const t = n(), r = e ? a ?? t : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": r, ...d, children: [
    e ? /* @__PURE__ */ o("title", { id: r, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.25 4.5h-3.375v-.75a2.625 2.625 0 0 0-2.625-2.625h-4.5A2.625 2.625 0 0 0 7.125 3.75v.75H3.75a1.875 1.875 0 0 0-1.875 1.875v12A1.875 1.875 0 0 0 3.75 20.25h16.5a1.875 1.875 0 0 0 1.875-1.875v-12A1.875 1.875 0 0 0 20.25 4.5M9.375 3.75a.375.375 0 0 1 .375-.375h4.5a.375.375 0 0 1 .375.375v.75h-5.25zm10.5 3v6H4.125v-6zM4.125 18v-3h15.75v3z" })
  ] });
});
s.displayName = "SuitcaseSimple";
export {
  s as SuitcaseSimple
};
//# sourceMappingURL=SuitcaseSimple.js.map
