import { jsxs as l, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const m = t(({
  size: r = "1em",
  title: a,
  titleId: e,
  ...v
}, i) => {
  const h = n(), o = a ? e ?? h : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": o, ...v, children: [
    a ? /* @__PURE__ */ d("title", { id: o, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.75 4.875v3.75a1.125 1.125 0 1 1-2.25 0V6h-2.625a1.125 1.125 0 0 1 0-2.25h3.75a1.125 1.125 0 0 1 1.125 1.125M7.125 18H4.5v-2.625a1.125 1.125 0 0 0-2.25 0v3.75a1.125 1.125 0 0 0 1.125 1.125h3.75a1.125 1.125 0 1 0 0-2.25m13.5-3.75a1.125 1.125 0 0 0-1.125 1.125V18h-2.625a1.125 1.125 0 1 0 0 2.25h3.75a1.125 1.125 0 0 0 1.125-1.125v-3.75a1.125 1.125 0 0 0-1.125-1.125m-17.25-4.5A1.125 1.125 0 0 0 4.5 8.625V6h2.625a1.125 1.125 0 0 0 0-2.25h-3.75A1.125 1.125 0 0 0 2.25 4.875v3.75A1.125 1.125 0 0 0 3.375 9.75M8.25 7.5a1.125 1.125 0 0 0-1.125 1.125v6.75a1.125 1.125 0 0 0 2.25 0v-6.75A1.125 1.125 0 0 0 8.25 7.5m8.625 7.875v-6.75a1.125 1.125 0 1 0-2.25 0v6.75a1.125 1.125 0 1 0 2.25 0M12 7.5a1.125 1.125 0 0 0-1.125 1.125v6.75a1.125 1.125 0 1 0 2.25 0v-6.75A1.125 1.125 0 0 0 12 7.5" })
  ] });
});
m.displayName = "Barcode";
export {
  m as Barcode
};
//# sourceMappingURL=Barcode.js.map
