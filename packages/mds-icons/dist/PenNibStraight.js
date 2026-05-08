import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as v } from "react";
const m = h(({
  size: i = "1em",
  title: r,
  titleId: o,
  ...a
}, d) => {
  const t = v(), l = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": l, ...a, children: [
    r ? /* @__PURE__ */ e("title", { id: l, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.18 11.448q-.013-.027-.028-.053l-2.777-4.94V3A1.875 1.875 0 0 0 16.5 1.125h-9A1.875 1.875 0 0 0 5.625 3v3.457l-2.777 4.938-.028.054a1.86 1.86 0 0 0 .198 1.976l8.104 10.152a1.125 1.125 0 0 0 1.758 0l8.103-10.152.026-.035a1.87 1.87 0 0 0 .171-1.942m-5.055-8.073v2.25h-8.25v-2.25zM12 13.5a.938.938 0 1 1 0-1.875.938.938 0 0 1 0 1.875m1.125 6.163v-4.118a3.187 3.187 0 1 0-2.25 0v4.117l-5.922-7.42 2.454-4.367h9.187l2.455 4.368z" })
  ] });
});
m.displayName = "PenNibStraight";
export {
  m as PenNibStraight
};
//# sourceMappingURL=PenNibStraight.js.map
