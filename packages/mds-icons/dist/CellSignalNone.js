import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: l = "1em",
  title: e,
  titleId: i,
  ...d
}, n) => {
  const a = h(), o = e ? i ?? a : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: n, "aria-labelledby": o, ...d, children: [
    e ? /* @__PURE__ */ r("title", { id: o, children: e }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M4.875 18v.75a1.125 1.125 0 0 1-2.25 0V18a1.125 1.125 0 0 1 2.25 0" })
  ] });
});
m.displayName = "CellSignalNone";
export {
  m as CellSignalNone
};
//# sourceMappingURL=CellSignalNone.js.map
