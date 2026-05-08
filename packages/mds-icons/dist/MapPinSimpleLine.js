import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const p = h(({
  size: e = "1em",
  title: i,
  titleId: d,
  ...a
}, l) => {
  const n = m(), r = i ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: l, "aria-labelledby": r, ...a, children: [
    i ? /* @__PURE__ */ o("title", { id: r, children: i }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.25 19.125h-7.125V13.01a5.625 5.625 0 1 0-2.25 0v6.114H3.75a1.125 1.125 0 1 0 0 2.25h16.5a1.125 1.125 0 1 0 0-2.25M8.625 7.5a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0" })
  ] });
});
p.displayName = "MapPinSimpleLine";
export {
  p as MapPinSimpleLine
};
//# sourceMappingURL=MapPinSimpleLine.js.map
