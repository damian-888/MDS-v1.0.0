import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...i
}, h) => {
  const l = s(), e = r ? d ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: h, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M22.875 5.625H1.125a1.125 1.125 0 0 0 0 2.25H1.5V18a1.125 1.125 0 0 0 2.25 0v-3.375h16.5V18a1.125 1.125 0 1 0 2.25 0V7.875h.375a1.125 1.125 0 0 0 0-2.25M3.75 7.875h7.125v4.5H3.75zm16.5 4.5h-7.125v-4.5h7.125zm-10.875-2.25A1.125 1.125 0 0 1 8.25 11.25H6.375a1.125 1.125 0 1 1 0-2.25H8.25a1.125 1.125 0 0 1 1.125 1.125m5.25 0A1.125 1.125 0 0 1 15.75 9h1.875a1.125 1.125 0 0 1 0 2.25H15.75a1.125 1.125 0 0 1-1.125-1.125" })
  ] });
});
m.displayName = "Desk";
export {
  m as Desk
};
//# sourceMappingURL=Desk.js.map
