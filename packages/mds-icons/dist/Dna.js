import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as v } from "react";
const m = t(({
  size: r = "1em",
  title: a,
  titleId: e,
  ...i
}, l) => {
  const h = v(), o = a ? e ?? h : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    a ? /* @__PURE__ */ d("title", { id: o, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.125 19.172v2.578a1.125 1.125 0 1 1-2.25 0v-2.578a5.59 5.59 0 0 0-3.11-5.032l-4.537-2.268a7.83 7.83 0 0 1-4.353-7.044V2.25a1.125 1.125 0 1 1 2.25 0v2.578a5.6 5.6 0 0 0 3.11 5.032l4.537 2.268a7.83 7.83 0 0 1 4.353 7.044m-4.875-.047H7.125a5.6 5.6 0 0 1 .22-1.5h5.268a1.125 1.125 0 0 0 0-2.25h-4.01a4 4 0 0 1 .293-.3 1.125 1.125 0 0 0-1.542-1.64 7.9 7.9 0 0 0-2.479 5.737v2.578a1.125 1.125 0 1 0 2.25 0v-.375h7.125a1.125 1.125 0 1 0 0-2.25m3.75-18a1.125 1.125 0 0 0-1.125 1.125v.375H9.75a1.125 1.125 0 0 0 0 2.25h7.125a5.6 5.6 0 0 1-.22 1.5h-5.27a1.125 1.125 0 0 0 0 2.25h4.013a4 4 0 0 1-.294.3 1.125 1.125 0 1 0 1.542 1.64 7.9 7.9 0 0 0 2.479-5.737V2.25A1.125 1.125 0 0 0 18 1.125" })
  ] });
});
m.displayName = "Dna";
export {
  m as Dna
};
//# sourceMappingURL=Dna.js.map
