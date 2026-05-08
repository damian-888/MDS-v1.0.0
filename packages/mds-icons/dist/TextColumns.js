import { jsxs as l, jsx as r } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: h = "1em",
  title: a,
  titleId: e,
  ...d
}, m) => {
  const i = n(), o = a ? e ?? i : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: h, height: h, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: m, "aria-labelledby": o, ...d, children: [
    a ? /* @__PURE__ */ r("title", { id: o, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M11.25 6a1.125 1.125 0 0 1-1.125 1.125H3.75a1.125 1.125 0 0 1 0-2.25h6.375A1.125 1.125 0 0 1 11.25 6m-1.125 2.625H3.75a1.125 1.125 0 0 0 0 2.25h6.375a1.125 1.125 0 1 0 0-2.25m0 3.75H3.75a1.125 1.125 0 1 0 0 2.25h6.375a1.125 1.125 0 1 0 0-2.25m0 3.75H3.75a1.125 1.125 0 1 0 0 2.25h6.375a1.125 1.125 0 1 0 0-2.25m3.75-9h6.375a1.125 1.125 0 0 0 0-2.25h-6.375a1.125 1.125 0 0 0 0 2.25m6.375 1.5h-6.375a1.125 1.125 0 0 0 0 2.25h6.375a1.125 1.125 0 1 0 0-2.25m0 3.75h-6.375a1.125 1.125 0 1 0 0 2.25h6.375a1.125 1.125 0 1 0 0-2.25m0 3.75h-6.375a1.125 1.125 0 1 0 0 2.25h6.375a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
s.displayName = "TextColumns";
export {
  s as TextColumns
};
//# sourceMappingURL=TextColumns.js.map
