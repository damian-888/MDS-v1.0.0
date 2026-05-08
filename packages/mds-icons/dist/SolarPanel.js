import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as t } from "react";
const s = n(({
  size: l = "1em",
  title: a,
  titleId: e,
  ...d
}, h) => {
  const i = t(), r = a ? e ?? i : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ o("title", { id: r, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M3 9.375A1.125 1.125 0 0 1 4.125 8.25h.75a1.125 1.125 0 0 1 0 2.25h-.75A1.125 1.125 0 0 1 3 9.375m9-6a1.125 1.125 0 0 0 1.125-1.125V1.5a1.125 1.125 0 0 0-2.25 0v.75A1.125 1.125 0 0 0 12 3.375M6.166 5.132A1.127 1.127 0 0 0 7.76 3.538l-.53-.53a1.127 1.127 0 1 0-1.595 1.594zm10.875.33a1.13 1.13 0 0 0 .796-.33l.53-.53a1.126 1.126 0 0 0-.797-1.924c-.3 0-.586.12-.797.33l-.53.53a1.124 1.124 0 0 0 .795 1.921zm.96 3.913a1.125 1.125 0 0 0 1.124 1.125h.75a1.125 1.125 0 0 0 0-2.25h-.75A1.125 1.125 0 0 0 18 9.375M8.25 10.5a1.125 1.125 0 0 0 1.124-1.125 2.625 2.625 0 0 1 5.25 0 1.125 1.125 0 1 0 2.25 0 4.875 4.875 0 0 0-9.75 0A1.125 1.125 0 0 0 8.25 10.5m14.47 10.317a1.13 1.13 0 0 1-.97.558H2.25a1.125 1.125 0 0 1-.98-1.678l4.03-7.125a1.13 1.13 0 0 1 .98-.572H17.72a1.13 1.13 0 0 1 .98.572l4.03 7.125a1.13 1.13 0 0 1-.008 1.12m-5.658-6.567h-3.938v1.125h4.577zm-10.125 0-.636 1.125h4.573V14.25zm-2.76 4.875h6.697v-1.5H5.026zm15.644 0-.844-1.5h-5.853v1.5z" })
  ] });
});
s.displayName = "SolarPanel";
export {
  s as SolarPanel
};
//# sourceMappingURL=SolarPanel.js.map
