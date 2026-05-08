import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as c, useId as n } from "react";
const s = c(({
  size: l = "1em",
  title: e,
  titleId: i,
  ...a
}, o) => {
  const h = n(), d = e ? i ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: o, "aria-labelledby": d, ...a, children: [
    e ? /* @__PURE__ */ r("title", { id: d, children: e }) : null,
    /* @__PURE__ */ r("g", { clipPath: "url(#a)", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M14.297 14.678a6.75 6.75 0 1 0-8.344 0 11.6 11.6 0 0 0-4.564 3.35 1.125 1.125 0 0 0 1.723 1.448c1.283-1.528 3.544-3.35 7.013-3.35s5.73 1.822 7.014 3.35a1.125 1.125 0 1 0 1.723-1.448 11.6 11.6 0 0 0-4.565-3.35M5.625 9.377a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0m18.046 3.42-3 3a1.127 1.127 0 0 1-1.594 0l-1.5-1.5a1.127 1.127 0 0 1 1.594-1.593l.704.704 2.204-2.205a1.13 1.13 0 0 1 1.838.366 1.13 1.13 0 0 1-.244 1.228z" }) }),
    /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ r("clipPath", { id: "a", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
s.displayName = "UserCheck";
export {
  s as UserCheck
};
//# sourceMappingURL=UserCheck.js.map
