import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const v = h(({
  size: r = "1em",
  title: a,
  titleId: t,
  ...i
}, d) => {
  const l = s(), e = a ? t ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": e, ...i, children: [
    a ? /* @__PURE__ */ o("title", { id: e, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.25 3.375h-7.125V2.25a1.125 1.125 0 1 0-2.25 0v1.125H3.75A1.875 1.875 0 0 0 1.875 5.25V16.5a1.875 1.875 0 0 0 1.875 1.875h2.906L5.12 20.297a1.125 1.125 0 0 0 1.757 1.406l2.662-3.328h4.918l2.663 3.328a1.124 1.124 0 1 0 1.757-1.406l-1.532-1.922h2.906a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875m-.375 12.75H4.125v-10.5h15.75zM9.75 11.25v2.25a1.125 1.125 0 0 1-2.25 0v-2.25a1.125 1.125 0 0 1 2.25 0M12 8.625a1.125 1.125 0 0 1 1.125 1.125v3.75a1.125 1.125 0 1 1-2.25 0V9.75A1.125 1.125 0 0 1 12 8.625m2.25 4.875V8.25a1.125 1.125 0 1 1 2.25 0v5.25a1.125 1.125 0 1 1-2.25 0" })
  ] });
});
v.displayName = "PresentationChart";
export {
  v as PresentationChart
};
//# sourceMappingURL=PresentationChart.js.map
