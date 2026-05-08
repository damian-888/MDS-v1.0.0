import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as h } from "react";
const s = t(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...d
}, l) => {
  const n = h(), i = r ? a ?? n : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h14.25zm-9-5.752a3.7 3.7 0 0 0 1.4.468l-1.24 2.082a1.125 1.125 0 1 0 1.93 1.154L15.249 12a3.75 3.75 0 1 0-5.123 1.373m.576-3.998a1.5 1.5 0 0 1 2.598 1.5 1.5 1.5 0 0 1-2.596-1.5z" })
  ] });
});
s.displayName = "NumberSquareNine";
export {
  s as NumberSquareNine
};
//# sourceMappingURL=NumberSquareNine.js.map
