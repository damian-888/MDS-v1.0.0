import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as v } from "react";
const s = m(({
  size: l = "1em",
  title: a,
  titleId: i,
  ...o
}, d) => {
  const n = v(), r = a ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20.296 17.954a1.127 1.127 0 1 1-1.594 1.594l-1.452-1.454-1.454 1.455a1.127 1.127 0 1 1-1.594-1.594l1.454-1.455-1.455-1.454a1.127 1.127 0 1 1 1.594-1.594l1.455 1.454 1.454-1.455a1.127 1.127 0 1 1 1.594 1.594L18.844 16.5zM15 11.25a1.125 1.125 0 0 0 1.125-1.125V6.75a1.125 1.125 0 1 0-2.25 0v3.375A1.125 1.125 0 0 0 15 11.25m3.75 0a1.125 1.125 0 0 0 1.125-1.125V3a1.125 1.125 0 1 0-2.25 0v7.125a1.125 1.125 0 0 0 1.125 1.125m-7.5-1.875a1.125 1.125 0 0 0-1.125 1.125v8.25a1.125 1.125 0 1 0 2.25 0V10.5a1.125 1.125 0 0 0-1.125-1.125m-3.75 3.75a1.125 1.125 0 0 0-1.125 1.125v4.5a1.125 1.125 0 0 0 2.25 0v-4.5A1.125 1.125 0 0 0 7.5 13.125m-3.75 3.75A1.125 1.125 0 0 0 2.625 18v.75a1.125 1.125 0 0 0 2.25 0V18a1.125 1.125 0 0 0-1.125-1.125" })
  ] });
});
s.displayName = "CellSignalX";
export {
  s as CellSignalX
};
//# sourceMappingURL=CellSignalX.js.map
