import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as v } from "react";
const s = h(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...e
}, i) => {
  const t = v(), o = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ l("title", { id: o, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M1.875 4.125A1.125 1.125 0 0 1 3 3h18a1.125 1.125 0 0 1 0 2.25H3a1.125 1.125 0 0 1-1.125-1.125M21 18.75H3A1.125 1.125 0 1 0 3 21h18a1.125 1.125 0 1 0 0-2.25M13.875 6.375A1.125 1.125 0 0 0 12.75 7.5v9a1.125 1.125 0 1 0 2.25 0v-2.577l.791-.905 2.362 4.05a1.125 1.125 0 0 0 1.944-1.13l-2.743-4.701L19.97 8.24a1.125 1.125 0 1 0-1.688-1.482L15 10.51V7.5a1.125 1.125 0 0 0-1.125-1.125M7.5 16.5v-1.125H3.375a1.124 1.124 0 0 1-.888-1.816l5.25-6.75A1.125 1.125 0 0 1 9.75 7.5v5.625h.375a1.125 1.125 0 1 1 0 2.25H9.75V16.5a1.125 1.125 0 0 1-2.25 0m0-3.375v-2.344l-1.824 2.344z" })
  ] });
});
s.displayName = "FourK";
export {
  s as FourK
};
//# sourceMappingURL=FourK.js.map
