import { jsxs as m, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const t = n(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, l) => {
  const h = v(), e = a ? o ?? h : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": e, ...d, children: [
    a ? /* @__PURE__ */ i("title", { id: e, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21.375 3.75v2.625a1.125 1.125 0 1 1-2.25 0v-1.5h-1.5a1.125 1.125 0 0 1 0-2.25h2.625a1.125 1.125 0 0 1 1.125 1.125M20.25 16.5a1.125 1.125 0 0 0-1.125 1.125v1.5h-1.5a1.125 1.125 0 1 0 0 2.25h2.625a1.125 1.125 0 0 0 1.125-1.125v-2.625A1.125 1.125 0 0 0 20.25 16.5M6.375 19.125h-1.5v-1.5a1.125 1.125 0 0 0-2.25 0v2.625a1.125 1.125 0 0 0 1.125 1.125h2.625a1.125 1.125 0 1 0 0-2.25M3.75 7.5a1.125 1.125 0 0 0 1.125-1.125v-1.5h1.5a1.125 1.125 0 0 0 0-2.25H3.75A1.125 1.125 0 0 0 2.625 3.75v2.625A1.125 1.125 0 0 0 3.75 7.5m8.25 12a7.5 7.5 0 1 1 7.5-7.5 7.51 7.51 0 0 1-7.5 7.5m5.25-7.5a5.25 5.25 0 1 0-10.5 0 5.25 5.25 0 0 0 10.5 0m-7.5-2.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m4.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" })
  ] });
});
t.displayName = "ScanSmiley";
export {
  t as ScanSmiley
};
//# sourceMappingURL=ScanSmiley.js.map
