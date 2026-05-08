import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const v = m(({
  size: i = "1em",
  title: e,
  titleId: d,
  ...a
}, o) => {
  const n = s(), l = e ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: o, "aria-labelledby": l, ...a, children: [
    e ? /* @__PURE__ */ r("title", { id: l, children: e }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M12.375 10.5v8.25a1.125 1.125 0 1 1-2.25 0V10.5a1.125 1.125 0 1 1 2.25 0M7.5 13.125a1.125 1.125 0 0 0-1.125 1.125v4.5a1.125 1.125 0 0 0 2.25 0v-4.5A1.125 1.125 0 0 0 7.5 13.125m-3.75 3.75A1.125 1.125 0 0 0 2.625 18v.75a1.125 1.125 0 0 0 2.25 0V18a1.125 1.125 0 0 0-1.125-1.125" })
  ] });
});
v.displayName = "CellSignalMedium";
export {
  v as CellSignalMedium
};
//# sourceMappingURL=CellSignalMedium.js.map
