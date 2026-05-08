import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as p } from "react";
const s = h(({
  size: r = "1em",
  title: o,
  titleId: a,
  ...e
}, l) => {
  const n = p(), i = o ? a ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": i, ...e, children: [
    o ? /* @__PURE__ */ d("title", { id: i, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M20.25 3.375H3.75A1.875 1.875 0 0 0 1.875 5.25v13.5a1.875 1.875 0 0 0 1.875 1.875h16.5a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875m-.375 15H4.125V5.625h15.75zM7.125 8.25a1.125 1.125 0 0 1 2.25 0 2.625 2.625 0 0 0 5.25 0 1.125 1.125 0 1 1 2.25 0 4.875 4.875 0 1 1-9.75 0" })
  ] });
});
s.displayName = "ShoppingBag";
export {
  s as ShoppingBag
};
//# sourceMappingURL=ShoppingBag.js.map
