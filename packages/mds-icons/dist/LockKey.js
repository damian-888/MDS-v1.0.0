import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const m = n(({
  size: r = "1em",
  title: o,
  titleId: a,
  ...i
}, l) => {
  const t = v(), e = o ? a ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": e, ...i, children: [
    o ? /* @__PURE__ */ d("title", { id: e, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.5 7.125h-2.625V5.25a4.875 4.875 0 1 0-9.75 0v1.875H4.5A1.875 1.875 0 0 0 2.625 9v10.5A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875V9A1.875 1.875 0 0 0 19.5 7.125M9.375 5.25a2.625 2.625 0 0 1 5.25 0v1.875h-5.25zm9.75 13.875H4.875v-9.75h14.25zM12 10.5a3 3 0 0 0-1.125 5.78v.595a1.125 1.125 0 1 0 2.25 0v-.594A3 3 0 0 0 12 10.5m0 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5" })
  ] });
});
m.displayName = "LockKey";
export {
  m as LockKey
};
//# sourceMappingURL=LockKey.js.map
