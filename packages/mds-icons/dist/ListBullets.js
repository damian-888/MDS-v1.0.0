import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const n = s(({
  size: a = "1em",
  title: r,
  titleId: l,
  ...o
}, d) => {
  const t = m(), e = r ? l ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M7.125 6A1.125 1.125 0 0 1 8.25 4.875h12a1.125 1.125 0 0 1 0 2.25h-12A1.125 1.125 0 0 1 7.125 6m13.125 4.875h-12a1.125 1.125 0 1 0 0 2.25h12a1.125 1.125 0 1 0 0-2.25m0 6h-12a1.125 1.125 0 1 0 0 2.25h12a1.125 1.125 0 1 0 0-2.25M4.125 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 12a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" })
  ] });
});
n.displayName = "ListBullets";
export {
  n as ListBullets
};
//# sourceMappingURL=ListBullets.js.map
