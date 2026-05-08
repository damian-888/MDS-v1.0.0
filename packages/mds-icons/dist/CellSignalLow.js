import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as v } from "react";
const w = s(({
  size: o = "1em",
  title: l,
  titleId: i,
  ...d
}, a) => {
  const n = v(), r = l ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: a, "aria-labelledby": r, ...d, children: [
    l ? /* @__PURE__ */ e("title", { id: r, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M8.625 14.25v4.5a1.125 1.125 0 0 1-2.25 0v-4.5a1.125 1.125 0 0 1 2.25 0M3.75 16.875A1.125 1.125 0 0 0 2.625 18v.75a1.125 1.125 0 0 0 2.25 0V18a1.125 1.125 0 0 0-1.125-1.125" })
  ] });
});
w.displayName = "CellSignalLow";
export {
  w as CellSignalLow
};
//# sourceMappingURL=CellSignalLow.js.map
