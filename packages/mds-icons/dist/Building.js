import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const s = t(({
  size: h = "1em",
  title: a,
  titleId: d,
  ...o
}, e) => {
  const l = m(), i = a ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: h, height: h, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": i, ...o, children: [
    a ? /* @__PURE__ */ r("title", { id: i, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M21.75 20.625h-1.875V3.375h.375a1.125 1.125 0 0 0 0-2.25H3.75a1.125 1.125 0 0 0 0 2.25h.375v17.25H2.25a1.125 1.125 0 1 0 0 2.25h19.5a1.125 1.125 0 1 0 0-2.25M6.375 3.375h11.25v17.25h-2.25V17.25a1.125 1.125 0 0 0-1.125-1.125h-4.5a1.125 1.125 0 0 0-1.125 1.125v3.375h-2.25zm6.75 17.25h-2.25v-2.25h2.25zM7.875 6A1.125 1.125 0 0 1 9 4.875h1.125a1.125 1.125 0 0 1 0 2.25H9A1.125 1.125 0 0 1 7.875 6m4.875 0a1.125 1.125 0 0 1 1.125-1.125H15a1.125 1.125 0 0 1 0 2.25h-1.125A1.125 1.125 0 0 1 12.75 6M7.875 9.75A1.125 1.125 0 0 1 9 8.625h1.125a1.125 1.125 0 0 1 0 2.25H9A1.125 1.125 0 0 1 7.875 9.75m4.875 0a1.125 1.125 0 0 1 1.125-1.125H15a1.125 1.125 0 0 1 0 2.25h-1.125A1.125 1.125 0 0 1 12.75 9.75M7.875 13.5A1.125 1.125 0 0 1 9 12.375h1.125a1.125 1.125 0 1 1 0 2.25H9A1.125 1.125 0 0 1 7.875 13.5m4.875 0a1.125 1.125 0 0 1 1.125-1.125H15a1.125 1.125 0 1 1 0 2.25h-1.125A1.125 1.125 0 0 1 12.75 13.5" })
  ] });
});
s.displayName = "Building";
export {
  s as Building
};
//# sourceMappingURL=Building.js.map
