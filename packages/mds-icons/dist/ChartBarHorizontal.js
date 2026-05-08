import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const m = n(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...t
}, e) => {
  const l = v(), a = r ? d ?? l : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: e, "aria-labelledby": a, ...t, children: [
    r ? /* @__PURE__ */ i("title", { id: a, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21 8.625h-3.375V5.25A1.125 1.125 0 0 0 16.5 4.125H5.625V3.75a1.125 1.125 0 0 0-2.25 0v16.5a1.125 1.125 0 0 0 2.25 0v-.375H13.5a1.125 1.125 0 0 0 1.125-1.125v-3.375H21a1.125 1.125 0 0 0 1.125-1.125v-4.5A1.125 1.125 0 0 0 21 8.625m-5.625-2.25v2.25h-9.75v-2.25zm-3 11.25h-6.75v-2.25h6.75zm7.5-4.5H5.625v-2.25h14.25z" })
  ] });
});
m.displayName = "ChartBarHorizontal";
export {
  m as ChartBarHorizontal
};
//# sourceMappingURL=ChartBarHorizontal.js.map
