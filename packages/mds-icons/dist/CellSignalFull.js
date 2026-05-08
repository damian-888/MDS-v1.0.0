import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as v, useId as m } from "react";
const s = v(({
  size: a = "1em",
  title: l,
  titleId: i,
  ...o
}, d) => {
  const n = m(), r = l ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    l ? /* @__PURE__ */ e("title", { id: r, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M16.125 6.75v12a1.125 1.125 0 1 1-2.25 0v-12a1.125 1.125 0 1 1 2.25 0m2.625-4.875A1.125 1.125 0 0 0 17.625 3v15.75a1.125 1.125 0 1 0 2.25 0V3a1.125 1.125 0 0 0-1.125-1.125m-7.5 7.5a1.125 1.125 0 0 0-1.125 1.125v8.25a1.125 1.125 0 1 0 2.25 0V10.5a1.125 1.125 0 0 0-1.125-1.125m-3.75 3.75a1.125 1.125 0 0 0-1.125 1.125v4.5a1.125 1.125 0 0 0 2.25 0v-4.5A1.125 1.125 0 0 0 7.5 13.125m-3.75 3.75A1.125 1.125 0 0 0 2.625 18v.75a1.125 1.125 0 0 0 2.25 0V18a1.125 1.125 0 0 0-1.125-1.125" })
  ] });
});
s.displayName = "CellSignalFull";
export {
  s as CellSignalFull
};
//# sourceMappingURL=CellSignalFull.js.map
