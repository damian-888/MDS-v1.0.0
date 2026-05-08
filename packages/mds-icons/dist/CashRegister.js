import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as n } from "react";
const v = s(({
  size: r = "1em",
  title: h,
  titleId: i,
  ...o
}, d) => {
  const l = n(), a = h ? i ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": h ? void 0 : !0, role: h ? "img" : void 0, ref: d, "aria-labelledby": a, ...o, children: [
    h ? /* @__PURE__ */ e("title", { id: a, children: h }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m22.838 14.719-2.103-8.063A1.875 1.875 0 0 0 18.92 5.25h-5.796v-1.5a1.875 1.875 0 0 0-1.875-1.875H7.5A1.875 1.875 0 0 0 5.625 3.75v1.5h-.546a1.875 1.875 0 0 0-1.814 1.406L1.162 14.72a1.1 1.1 0 0 0-.037.281v3A1.875 1.875 0 0 0 3 19.875h18A1.875 1.875 0 0 0 22.875 18v-3q0-.144-.037-.281M7.875 4.125h3V5.25h-3zM5.369 7.5h13.262l1.663 6.375H3.706zM3.375 17.625v-1.5h17.25v1.5zM6 10.875A1.125 1.125 0 0 1 7.125 9.75h.75a1.125 1.125 0 0 1 0 2.25h-.75A1.125 1.125 0 0 1 6 10.875m4.5 0a1.125 1.125 0 0 1 1.125-1.125h.75a1.125 1.125 0 0 1 0 2.25h-.75a1.125 1.125 0 0 1-1.125-1.125m4.5 0a1.125 1.125 0 0 1 1.125-1.125h.75a1.125 1.125 0 0 1 0 2.25h-.75A1.125 1.125 0 0 1 15 10.875" })
  ] });
});
v.displayName = "CashRegister";
export {
  v as CashRegister
};
//# sourceMappingURL=CashRegister.js.map
