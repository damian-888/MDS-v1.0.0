import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const t = h(), l = a ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": l, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: l, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m23.506 19.747-5.25-10.5a1.125 1.125 0 0 0-2.012 0L14.32 13.09a7.9 7.9 0 0 1-3.633-1.257 10.08 10.08 0 0 0 2.375-5.458H15a1.125 1.125 0 0 0 0-2.25h-4.875V3a1.125 1.125 0 1 0-2.25 0v1.125H3a1.125 1.125 0 0 0 0 2.25h7.793A7.85 7.85 0 0 1 9 10.345a7.9 7.9 0 0 1-1.162-1.814 1.125 1.125 0 1 0-2.045.938c.393.856.905 1.652 1.52 2.366A7.83 7.83 0 0 1 3 13.125a1.125 1.125 0 1 0 0 2.25c2.16.002 4.263-.69 6-1.975 1.26.926 2.716 1.55 4.255 1.822l-2.262 4.525a1.124 1.124 0 1 0 2.012 1.006l1.19-2.378h6.11l1.188 2.378a1.125 1.125 0 0 0 2.013-1.006m-8.186-3.622 1.93-3.86 1.93 3.86z" })
  ] });
});
m.displayName = "Translate";
export {
  m as Translate
};
//# sourceMappingURL=Translate.js.map
