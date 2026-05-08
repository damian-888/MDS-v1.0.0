import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...a
}, l) => {
  const t = h(), i = r ? d ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...a, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h14.25zM12 17.625a3.75 3.75 0 0 0 .474-7.47l1.242-2.078a1.125 1.125 0 1 0-1.932-1.154l-3.022 5.063A3.75 3.75 0 0 0 12 17.625m0-5.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" })
  ] });
});
s.displayName = "NumberSquareSix";
export {
  s as NumberSquareSix
};
//# sourceMappingURL=NumberSquareSix.js.map
