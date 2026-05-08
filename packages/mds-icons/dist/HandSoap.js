import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as v } from "react";
const s = t(({
  size: o = "1em",
  title: a,
  titleId: e,
  ...h
}, i) => {
  const l = v(), r = a ? e ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...h, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M17.625 9.158v-.533A3.375 3.375 0 0 0 14.25 5.25h-1.125V3.375h2.625a.375.375 0 0 1 .375.375 1.125 1.125 0 1 0 2.25 0 2.625 2.625 0 0 0-2.625-2.625h-6a1.125 1.125 0 0 0 0 2.25h1.125V5.25H9.75a3.375 3.375 0 0 0-3.375 3.375v.533a4.13 4.13 0 0 0-3 3.967v7.125a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875v-7.125a4.13 4.13 0 0 0-3-3.967M9.75 7.5h4.5a1.125 1.125 0 0 1 1.125 1.125V9h-6.75v-.375A1.125 1.125 0 0 1 9.75 7.5m8.625 12.375H5.625v-6.75A1.875 1.875 0 0 1 7.5 11.25h9a1.875 1.875 0 0 1 1.875 1.875z" })
  ] });
});
s.displayName = "HandSoap";
export {
  s as HandSoap
};
//# sourceMappingURL=HandSoap.js.map
