import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const v = n(({
  size: a = "1em",
  title: r,
  titleId: l,
  ...e
}, h) => {
  const i = m(), o = r ? l ?? i : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: h, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M22.875 18.375h-.75A.375.375 0 0 1 21.75 18v-3a.375.375 0 0 1 .375-.375h.75a1.125 1.125 0 0 0 0-2.25h-.75A2.625 2.625 0 0 0 19.5 15v.375h-.908a4.14 4.14 0 0 0-3.187-2.925l-3.3-7.92a1.875 1.875 0 0 0-1.73-1.155H2.25A1.875 1.875 0 0 0 .375 5.25v9.534a4.125 4.125 0 0 0 3.75 5.841h10.5a4.13 4.13 0 0 0 3.967-3h.908V18a2.625 2.625 0 0 0 2.625 2.625h.75a1.125 1.125 0 0 0 0-2.25m-9.938-6H6.375v-6.75h3.75zm-8.812-6.75v6.75c-.513 0-1.022.095-1.5.281V5.625zm10.5 12.75h-10.5a1.875 1.875 0 1 1 0-3.75h10.5a1.875 1.875 0 1 1 0 3.75" })
  ] });
});
v.displayName = "Bulldozer";
export {
  v as Bulldozer
};
//# sourceMappingURL=Bulldozer.js.map
