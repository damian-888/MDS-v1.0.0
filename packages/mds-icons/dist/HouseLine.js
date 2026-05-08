import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const v = t(({
  size: o = "1em",
  title: e,
  titleId: a,
  ...d
}, l) => {
  const h = s(), r = e ? a ?? h : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": r, ...d, children: [
    e ? /* @__PURE__ */ i("title", { id: r, children: e }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M22.5 19.126h-1.125V13.5a1.124 1.124 0 0 0 1.17-1.854l-9.22-9.222a1.875 1.875 0 0 0-2.65 0l-9.22 9.22a1.125 1.125 0 0 0 1.17 1.857v5.624H1.5a1.125 1.125 0 0 0 0 2.25h21a1.125 1.125 0 1 0 0-2.25m-17.625-7.72L12 4.28l7.125 7.125v7.72h-3.75v-4.874a1.125 1.125 0 0 0-1.125-1.125h-4.5a1.125 1.125 0 0 0-1.125 1.125v4.874h-3.75zm8.25 7.72h-2.25v-3.75h2.25z" })
  ] });
});
v.displayName = "HouseLine";
export {
  v as HouseLine
};
//# sourceMappingURL=HouseLine.js.map
