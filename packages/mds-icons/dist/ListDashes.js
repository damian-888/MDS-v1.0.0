import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as l, useId as m } from "react";
const n = l(({
  size: r = "1em",
  title: a,
  titleId: i,
  ...o
}, d) => {
  const s = m(), h = a ? i ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": h, ...o, children: [
    a ? /* @__PURE__ */ e("title", { id: h, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7.875 6A1.125 1.125 0 0 1 9 4.875h11.25a1.125 1.125 0 0 1 0 2.25H9A1.125 1.125 0 0 1 7.875 6m12.375 4.875H9a1.125 1.125 0 1 0 0 2.25h11.25a1.125 1.125 0 1 0 0-2.25m0 6H9a1.125 1.125 0 1 0 0 2.25h11.25a1.125 1.125 0 1 0 0-2.25m-15-12h-1.5a1.125 1.125 0 0 0 0 2.25h1.5a1.125 1.125 0 0 0 0-2.25m0 6h-1.5a1.125 1.125 0 1 0 0 2.25h1.5a1.125 1.125 0 1 0 0-2.25m0 6h-1.5a1.125 1.125 0 1 0 0 2.25h1.5a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
n.displayName = "ListDashes";
export {
  n as ListDashes
};
//# sourceMappingURL=ListDashes.js.map
