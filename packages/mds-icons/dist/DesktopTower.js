import { jsxs as l, jsx as h } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: r = "1em",
  title: o,
  titleId: e,
  ...d
}, i) => {
  const t = n(), a = o ? e ?? t : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": a, ...d, children: [
    o ? /* @__PURE__ */ h("title", { id: a, children: o }) : null,
    /* @__PURE__ */ h("path", { fill: "currentColor", d: "M15.75 7.125A1.125 1.125 0 0 1 16.875 6h2.25a1.125 1.125 0 0 1 0 2.25h-2.25a1.125 1.125 0 0 1-1.125-1.125m1.125 4.5h2.25a1.125 1.125 0 1 0 0-2.25h-2.25a1.125 1.125 0 0 0 0 2.25m6.75-7.125v15a1.875 1.875 0 0 1-1.875 1.875h-7.5a1.875 1.875 0 0 1-1.875-1.875V18h-3v1.125h.75a1.125 1.125 0 1 1 0 2.25h-3.75a1.125 1.125 0 1 1 0-2.25h.75V18H3a2.625 2.625 0 0 1-2.625-2.625V9A2.625 2.625 0 0 1 3 6.375h9.375V4.5a1.875 1.875 0 0 1 1.875-1.875h7.5A1.875 1.875 0 0 1 23.625 4.5m-11.25 11.25V8.625H3A.375.375 0 0 0 2.625 9v6.375A.375.375 0 0 0 3 15.75zm9-10.875h-6.75v14.25h6.75zM18 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" })
  ] });
});
s.displayName = "DesktopTower";
export {
  s as DesktopTower
};
//# sourceMappingURL=DesktopTower.js.map
