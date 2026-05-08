import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...d
}, h) => {
  const i = s(), o = r ? a ?? i : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: h, "aria-labelledby": o, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: o, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M22.5 16.875h-.375V5.73l.61-.13a1.126 1.126 0 1 0-.468-2.2l-21 4.5a1.125 1.125 0 0 0 .47 2.2l.139-.03v6.805H1.5a1.125 1.125 0 1 0 0 2.25h21a1.125 1.125 0 1 0 0-2.25M4.125 9.587l15.75-3.375v10.663H18v-5.626a1.125 1.125 0 0 0-1.125-1.125h-9.75A1.125 1.125 0 0 0 6 11.25v5.626H4.125zM15.75 13.5h-7.5v-1.125h7.5zm-7.5 2.25h7.5v1.126h-7.5z" })
  ] });
});
v.displayName = "Warehouse";
export {
  v as Warehouse
};
//# sourceMappingURL=Warehouse.js.map
