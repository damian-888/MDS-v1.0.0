import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as v, useId as h } from "react";
const m = v(({
  size: i = "1em",
  title: a,
  titleId: e,
  ...o
}, d) => {
  const n = h(), l = a ? e ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": l, ...o, children: [
    a ? /* @__PURE__ */ r("title", { id: l, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M16.125 6.75v12a1.125 1.125 0 1 1-2.25 0v-12a1.125 1.125 0 1 1 2.25 0M11.25 9.375a1.125 1.125 0 0 0-1.125 1.125v8.25a1.125 1.125 0 1 0 2.25 0V10.5a1.125 1.125 0 0 0-1.125-1.125m-3.75 3.75a1.125 1.125 0 0 0-1.125 1.125v4.5a1.125 1.125 0 0 0 2.25 0v-4.5A1.125 1.125 0 0 0 7.5 13.125m-3.75 3.75A1.125 1.125 0 0 0 2.625 18v.75a1.125 1.125 0 0 0 2.25 0V18a1.125 1.125 0 0 0-1.125-1.125" })
  ] });
});
m.displayName = "CellSignalHigh";
export {
  m as CellSignalHigh
};
//# sourceMappingURL=CellSignalHigh.js.map
