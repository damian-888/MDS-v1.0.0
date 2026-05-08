import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as h } from "react";
const m = t(({
  size: i = "1em",
  title: a,
  titleId: e,
  ...o
}, d) => {
  const v = h(), r = a ? e ?? v : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    a ? /* @__PURE__ */ l("title", { id: r, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M4.5 14.25v5.25a1.125 1.125 0 0 1-2.25 0v-5.25a1.125 1.125 0 0 1 2.25 0m6.75-1.125a1.125 1.125 0 0 0-1.125 1.125v1.74l-1.71-2.396a1.125 1.125 0 0 0-2.04.656v5.25a1.125 1.125 0 0 0 2.25 0v-1.74l1.71 2.396a1.125 1.125 0 0 0 2.04-.656v-5.25a1.125 1.125 0 0 0-1.125-1.125m4.125 0a1.125 1.125 0 0 0-1.125 1.125v5.25a1.125 1.125 0 1 0 2.25 0v-5.25a1.125 1.125 0 0 0-1.125-1.125m5.25-4.875V21a1.125 1.125 0 1 1-2.25 0V9.75h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5H5.625v6a1.125 1.125 0 0 1-2.25 0V3.75A1.875 1.875 0 0 1 5.25 1.875h9a1.13 1.13 0 0 1 .796.33l5.25 5.25c.21.21.329.497.329.795M15 7.5h2.156L15 5.344z" })
  ] });
});
m.displayName = "FileIni";
export {
  m as FileIni
};
//# sourceMappingURL=FileIni.js.map
