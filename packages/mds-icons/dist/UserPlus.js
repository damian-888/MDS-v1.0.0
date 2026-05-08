import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: d = "1em",
  title: l,
  titleId: i,
  ...a
}, o) => {
  const h = s(), e = l ? i ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: d, height: d, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: o, "aria-labelledby": e, ...a, children: [
    l ? /* @__PURE__ */ r("title", { id: e, children: l }) : null,
    /* @__PURE__ */ r("g", { clipPath: "url(#a)", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M24 12.749a1.125 1.125 0 0 1-1.125 1.125h-.75v.75a1.125 1.125 0 1 1-2.25 0v-.75h-.75a1.125 1.125 0 1 1 0-2.25h.75v-.75a1.125 1.125 0 1 1 2.25 0v.75h.75A1.125 1.125 0 0 1 24 12.749m-5.138 5.276a1.126 1.126 0 0 1-1.723 1.448c-1.284-1.528-3.545-3.35-7.014-3.35-2.708 0-5.2 1.19-7.013 3.35a1.125 1.125 0 0 1-1.723-1.448 11.6 11.6 0 0 1 4.564-3.351 6.75 6.75 0 1 1 8.344 0 11.6 11.6 0 0 1 4.565 3.351m-8.737-4.151a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9" }) }),
    /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ r("clipPath", { id: "a", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
c.displayName = "UserPlus";
export {
  c as UserPlus
};
//# sourceMappingURL=UserPlus.js.map
