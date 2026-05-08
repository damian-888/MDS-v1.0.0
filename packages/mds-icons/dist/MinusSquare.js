import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const m = t(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...a
}, l) => {
  const n = s(), i = r ? d ?? n : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...a, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h14.25zM7.125 12a1.125 1.125 0 0 1 1.125-1.125h7.5a1.125 1.125 0 1 1 0 2.25h-7.5A1.125 1.125 0 0 1 7.125 12" })
  ] });
});
m.displayName = "MinusSquare";
export {
  m as MinusSquare
};
//# sourceMappingURL=MinusSquare.js.map
