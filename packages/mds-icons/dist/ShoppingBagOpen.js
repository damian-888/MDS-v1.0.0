import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as p } from "react";
const m = h(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...a
}, n) => {
  const l = p(), e = o ? d ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: n, "aria-labelledby": e, ...a, children: [
    o ? /* @__PURE__ */ i("title", { id: e, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M20.25 3.375H3.75A1.875 1.875 0 0 0 1.875 5.25v13.5a1.875 1.875 0 0 0 1.875 1.875h16.5a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875m-.375 2.25v1.5H4.125v-1.5zm-15.75 12.75v-9h15.75v9zm12.75-6.75a4.875 4.875 0 1 1-9.75 0 1.125 1.125 0 0 1 2.25 0 2.625 2.625 0 0 0 5.25 0 1.125 1.125 0 1 1 2.25 0" })
  ] });
});
m.displayName = "ShoppingBagOpen";
export {
  m as ShoppingBagOpen
};
//# sourceMappingURL=ShoppingBagOpen.js.map
