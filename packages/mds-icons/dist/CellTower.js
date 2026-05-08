import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: r = "1em",
  title: l,
  titleId: d,
  ...a
}, i) => {
  const t = s(), e = l ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": e, ...a, children: [
    l ? /* @__PURE__ */ o("title", { id: e, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M13 8.11a1.125 1.125 0 0 0-2 0L4.25 21.237a1.126 1.126 0 0 0 2 1.031l1.032-2.015h9.432l1.036 2.015a1.123 1.123 0 0 0 1.516.485 1.126 1.126 0 0 0 .484-1.516zm-1 2.976 1.627 3.165h-3.254zM8.444 18l.77-1.5h5.571l.77 1.5zM16.36 6.445a1.124 1.124 0 1 1-2.01 1.008 2.625 2.625 0 0 0-4.723.049 1.126 1.126 0 0 1-2.033-.966A4.9 4.9 0 0 1 12 3.75a4.85 4.85 0 0 1 4.36 2.693M4.68 13.569a8.625 8.625 0 1 1 14.64 0 1.125 1.125 0 0 1-1.91-1.194 6.375 6.375 0 1 0-10.82 0 1.125 1.125 0 0 1-1.91 1.191z" })
  ] });
});
m.displayName = "CellTower";
export {
  m as CellTower
};
//# sourceMappingURL=CellTower.js.map
