import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...d
}, a) => {
  const m = s(), l = r ? o ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: l, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M22.868 11.84A10.916 10.916 0 0 0 4.594 4.763a10.82 10.82 0 0 0-3.469 7.077A1.875 1.875 0 0 0 3 13.874h7.875v4.875a3.375 3.375 0 1 0 6.75 0 1.125 1.125 0 0 0-2.25 0 1.125 1.125 0 0 1-2.25 0v-4.875H21a1.874 1.874 0 0 0 1.875-2.034zm-19.452-.216a8.667 8.667 0 0 1 14.461-5.206 8.58 8.58 0 0 1 2.707 5.206z" })
  ] });
});
h.displayName = "UmbrellaSimple";
export {
  h as UmbrellaSimple
};
//# sourceMappingURL=UmbrellaSimple.js.map
