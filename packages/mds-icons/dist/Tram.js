import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const v = t(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const h = n(), l = a ? d ?? h : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": l, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: l, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M17.25 4.125h-4.125v-1.5h2.625a1.125 1.125 0 0 0 0-2.25h-7.5a1.125 1.125 0 1 0 0 2.25h2.625v1.5H6.75A3.375 3.375 0 0 0 3.375 7.5v9.75a3.375 3.375 0 0 0 3.375 3.375l-.9 1.2a1.125 1.125 0 1 0 1.8 1.35l1.912-2.55h4.876l1.912 2.55a1.125 1.125 0 1 0 1.8-1.35l-.9-1.2a3.375 3.375 0 0 0 3.375-3.375V7.5a3.375 3.375 0 0 0-3.375-3.375m-10.5 2.25h10.5A1.125 1.125 0 0 1 18.375 7.5v3.375H5.625V7.5A1.125 1.125 0 0 1 6.75 6.375m10.5 12H6.75a1.125 1.125 0 0 1-1.125-1.125v-4.125h12.75v4.125a1.125 1.125 0 0 1-1.125 1.125m-7.5-2.625a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m7.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
v.displayName = "Tram";
export {
  v as Tram
};
//# sourceMappingURL=Tram.js.map
