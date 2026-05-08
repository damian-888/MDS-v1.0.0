import { jsxs as l, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const n = t(({
  size: a = "1em",
  title: v,
  titleId: e,
  ...d
}, h) => {
  const i = m(), r = v ? e ?? i : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": v ? void 0 : !0, role: v ? "img" : void 0, ref: h, "aria-labelledby": r, ...d, children: [
    v ? /* @__PURE__ */ o("title", { id: r, children: v }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21.75 4.875H2.25A1.875 1.875 0 0 0 .375 6.75v12a1.125 1.125 0 1 0 2.25 0v-1.125H4.5v1.125a1.125 1.125 0 0 0 2.25 0v-1.125h1.875v1.125a1.125 1.125 0 0 0 2.25 0v-1.125h2.25v1.125a1.125 1.125 0 1 0 2.25 0v-1.125h1.875v1.125a1.125 1.125 0 1 0 2.25 0v-1.125h1.875v1.125a1.125 1.125 0 1 0 2.25 0v-12a1.875 1.875 0 0 0-1.875-1.875M2.625 7.125h18.75v8.25H2.625zm8.625 6v-3.75a1.125 1.125 0 0 0-1.125-1.125H5.25a1.125 1.125 0 0 0-1.125 1.125v3.75A1.125 1.125 0 0 0 5.25 14.25h4.875a1.125 1.125 0 0 0 1.125-1.125M9 12H6.375v-1.5H9zm4.875 2.25h4.875a1.125 1.125 0 0 0 1.125-1.125v-3.75A1.125 1.125 0 0 0 18.75 8.25h-4.875a1.125 1.125 0 0 0-1.125 1.125v3.75a1.125 1.125 0 0 0 1.125 1.125M15 10.5h2.625V12H15z" })
  ] });
});
n.displayName = "Memory";
export {
  n as Memory
};
//# sourceMappingURL=Memory.js.map
