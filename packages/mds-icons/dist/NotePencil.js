import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const v = h(({
  size: l = "1em",
  title: e,
  titleId: i,
  ...a
}, d) => {
  const t = m(), o = e ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: d, "aria-labelledby": o, ...a, children: [
    e ? /* @__PURE__ */ r("title", { id: o, children: e }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "m21.796 5.206-3-3a1.125 1.125 0 0 0-1.594 0l-9 9c-.21.211-.328.498-.327.796v3A1.125 1.125 0 0 0 9 16.127h3a1.13 1.13 0 0 0 .796-.33l9-9a1.125 1.125 0 0 0 0-1.591M18 4.596l1.406 1.406-1.031 1.031-1.406-1.406zm-6.469 9.28h-1.406v-1.405l5.25-5.25 1.406 1.406zm9.844-.696v6.322a1.875 1.875 0 0 1-1.875 1.875h-15a1.875 1.875 0 0 1-1.875-1.875v-15A1.875 1.875 0 0 1 4.5 2.627h6.322a1.125 1.125 0 0 1 0 2.25H4.875v14.25h14.25V13.18a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
v.displayName = "NotePencil";
export {
  v as NotePencil
};
//# sourceMappingURL=NotePencil.js.map
