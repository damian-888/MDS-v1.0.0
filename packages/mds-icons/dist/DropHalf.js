import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const m = n(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...i
}, l) => {
  const h = c(), a = r ? e ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": a, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: a, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M12.645.578a1.125 1.125 0 0 0-1.29 0 24.3 24.3 0 0 0-3.954 3.657c-2.634 3.024-4.026 6.23-4.026 9.265a8.625 8.625 0 1 0 17.25 0c0-7.253-7.654-12.694-7.98-12.922M18.195 15h-5.07v-1.5h5.25c0 .505-.06 1.009-.18 1.5m-5.07-3.75v-1.5h4.406q.323.73.533 1.5zm1.81-5.504q.725.837 1.347 1.754h-3.157V3.887a23 23 0 0 1 1.81 1.859M5.624 13.5c0-3.123 1.875-5.941 3.44-7.754a23 23 0 0 1 1.81-1.86v15.888a6.384 6.384 0 0 1-5.25-6.274m7.5 6.274V17.25h4.026a6.38 6.38 0 0 1-4.026 2.524" })
  ] });
});
m.displayName = "DropHalf";
export {
  m as DropHalf
};
//# sourceMappingURL=DropHalf.js.map
