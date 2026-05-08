import { jsxs as l, jsx as d } from "react/jsx-runtime";
import { forwardRef as v, useId as n } from "react";
const s = v(({
  size: r = "1em",
  title: i,
  titleId: o,
  ...h
}, t) => {
  const e = n(), a = i ? o ?? e : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: t, "aria-labelledby": a, ...h, children: [
    i ? /* @__PURE__ */ d("title", { id: a, children: i }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M20.25 4.875h-3.375v-.75A2.625 2.625 0 0 0 14.25 1.5h-4.5a2.625 2.625 0 0 0-2.625 2.625v.75H3.75A1.875 1.875 0 0 0 1.875 6.75v12a1.875 1.875 0 0 0 1.875 1.875h16.5a1.875 1.875 0 0 0 1.875-1.875v-12a1.875 1.875 0 0 0-1.875-1.875m-10.875-.75a.375.375 0 0 1 .375-.375h4.5a.375.375 0 0 1 .375.375v.75h-5.25zm10.5 14.25H4.125V7.125h15.75zm-4.5-5.625a1.125 1.125 0 0 1-1.125 1.125h-1.125V15a1.125 1.125 0 1 1-2.25 0v-1.125H9.75a1.125 1.125 0 1 1 0-2.25h1.125V10.5a1.125 1.125 0 1 1 2.25 0v1.125h1.125a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
s.displayName = "FirstAidKit";
export {
  s as FirstAidKit
};
//# sourceMappingURL=FirstAidKit.js.map
