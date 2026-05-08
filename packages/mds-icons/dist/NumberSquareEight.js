import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...a
}, t) => {
  const l = n(), i = r ? d ?? l : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": i, ...a, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h14.25zM8.25 14.25a3.75 3.75 0 1 0 6.338-2.71 3.374 3.374 0 1 0-5.175 0 3.74 3.74 0 0 0-1.163 2.71m3.75 1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m-1.125-6.375a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0" })
  ] });
});
s.displayName = "NumberSquareEight";
export {
  s as NumberSquareEight
};
//# sourceMappingURL=NumberSquareEight.js.map
