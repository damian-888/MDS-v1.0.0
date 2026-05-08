import { jsxs as l, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as t } from "react";
const a = n(({
  size: r = "1em",
  title: h,
  titleId: d,
  ...e
}, o) => {
  const m = t(), v = h ? d ?? m : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": h ? void 0 : !0, role: h ? "img" : void 0, ref: o, "aria-labelledby": v, ...e, children: [
    h ? /* @__PURE__ */ i("title", { id: v, children: h }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M20.25 4.125H3.75A1.875 1.875 0 0 0 1.875 6v12a1.875 1.875 0 0 0 1.875 1.875h16.5A1.875 1.875 0 0 0 22.125 18V6a1.875 1.875 0 0 0-1.875-1.875m-10.125 9v-2.25h3.75v2.25zm3.75 2.25v2.25h-3.75v-2.25zm-9.75-4.5h3.75v2.25h-3.75zm6-2.25v-2.25h3.75v2.25zm6 2.25h3.75v2.25h-3.75zm3.75-2.25h-3.75v-2.25h3.75zm-12-2.25v2.25h-3.75v-2.25zm-3.75 9h3.75v2.25h-3.75zm12 2.25v-2.25h3.75v2.25z" })
  ] });
});
a.displayName = "GridNine";
export {
  a as GridNine
};
//# sourceMappingURL=GridNine.js.map
