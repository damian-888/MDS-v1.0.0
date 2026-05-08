import { jsxs as l, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...i
}, t) => {
  const c = s(), e = r ? d ?? c : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M16.688 3.375c-1.884 0-3.555.743-4.688 2.021-1.133-1.278-2.804-2.021-4.687-2.021a6.195 6.195 0 0 0-6.188 6.188c0 6.781 9.92 12.2 10.342 12.428a1.13 1.13 0 0 0 1.066 0c.422-.228 10.342-5.647 10.342-12.428a6.195 6.195 0 0 0-6.187-6.188m-.515 13.346A31 31 0 0 1 12 19.703a31 31 0 0 1-4.173-2.982c-2.031-1.743-4.452-4.4-4.452-7.158a3.937 3.937 0 0 1 3.938-3.938c1.668 0 3.065.881 3.645 2.3a1.125 1.125 0 0 0 2.084 0c.58-1.419 1.977-2.3 3.646-2.3a3.937 3.937 0 0 1 3.937 3.938c0 2.758-2.42 5.415-4.452 7.158" })
  ] });
});
m.displayName = "Heart";
export {
  m as Heart
};
//# sourceMappingURL=Heart.js.map
