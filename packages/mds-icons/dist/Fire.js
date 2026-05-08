import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as c, useId as m } from "react";
const s = c(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...d
}, l) => {
  const t = m(), i = r ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M16.652 14.962a4.88 4.88 0 0 1-3.188 3.188q-.165.051-.337.051a1.126 1.126 0 0 1-.338-2.198 2.63 2.63 0 0 0 1.718-1.717 1.124 1.124 0 0 1 2.071-.183 1.13 1.13 0 0 1 .076.857zm3.973-1.462a8.625 8.625 0 1 1-17.25 0c0-2.701 1.057-5.455 3.139-8.183a1.125 1.125 0 0 1 1.678-.124l1.846 1.791 1.868-5.12a1.125 1.125 0 0 1 1.776-.48c2.087 1.733 6.943 6.383 6.943 12.116m-2.25 0c0-3.91-2.87-7.35-4.924-9.309l-1.894 5.194a1.125 1.125 0 0 1-1.84.422l-2.15-2.086c-1.286 1.97-1.942 3.91-1.942 5.779a6.375 6.375 0 1 0 12.75 0" })
  ] });
});
s.displayName = "Fire";
export {
  s as Fire
};
//# sourceMappingURL=Fire.js.map
