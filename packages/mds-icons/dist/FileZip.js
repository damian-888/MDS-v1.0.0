import { jsxs as v, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const m = t(({
  size: i = "1em",
  title: a,
  titleId: e,
  ...h
}, o) => {
  const d = n(), r = a ? e ?? d : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: o, "aria-labelledby": r, ...h, children: [
    a ? /* @__PURE__ */ l("title", { id: r, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M17.625 13.125h-1.5A1.125 1.125 0 0 0 15 14.25v5.25a1.125 1.125 0 1 0 2.25 0v-.375h.375a3 3 0 0 0 0-6m0 3.75h-.375v-1.5h.375a.75.75 0 1 1 0 1.5m-4.5-2.625v5.25a1.125 1.125 0 1 1-2.25 0v-5.25a1.125 1.125 0 1 1 2.25 0M9 19.5a1.125 1.125 0 0 1-1.125 1.125h-3a1.125 1.125 0 0 1-.977-1.683l2.038-3.567H4.875a1.125 1.125 0 1 1 0-2.25h3a1.125 1.125 0 0 1 .977 1.688l-2.038 3.562h1.061A1.125 1.125 0 0 1 9 19.5M20.296 7.455l-5.25-5.25a1.12 1.12 0 0 0-.796-.33h-9A1.875 1.875 0 0 0 3.375 3.75v6.375a1.125 1.125 0 0 0 2.25 0v-6h7.125v4.5a1.125 1.125 0 0 0 1.125 1.125h4.5v.375a1.125 1.125 0 1 0 2.25 0V8.25c0-.298-.118-.584-.33-.795M15 7.5V5.344L17.156 7.5z" })
  ] });
});
m.displayName = "FileZip";
export {
  m as FileZip
};
//# sourceMappingURL=FileZip.js.map
