import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as c, useId as n } from "react";
const s = c(({
  size: i = "1em",
  title: a,
  titleId: e,
  ...l
}, h) => {
  const o = n(), d = a ? e ?? o : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": d, ...l, children: [
    a ? /* @__PURE__ */ r("title", { id: d, children: a }) : null,
    /* @__PURE__ */ r("g", { clipPath: "url(#a)", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M14.25 7.5a1.125 1.125 0 0 1 1.125-1.125h7.5a1.125 1.125 0 1 1 0 2.25h-7.5A1.125 1.125 0 0 1 14.25 7.5m8.625 3.375h-7.5a1.125 1.125 0 1 0 0 2.25h7.5a1.125 1.125 0 0 0 0-2.25m0 4.5h-5.25a1.125 1.125 0 1 0 0 2.25h5.25a1.125 1.125 0 0 0 0-2.25m-8.285 2.343a1.126 1.126 0 0 1-2.18.563c-.536-2.084-2.647-3.656-4.91-3.656s-4.374 1.57-4.91 3.656a1.124 1.124 0 1 1-2.18-.563c.505-1.959 1.884-3.577 3.667-4.5a4.875 4.875 0 1 1 6.844 0c1.785.924 3.164 2.542 3.669 4.5M7.5 12.375a2.625 2.625 0 1 0 0-5.251 2.625 2.625 0 0 0 0 5.25" }) }),
    /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ r("clipPath", { id: "a", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
s.displayName = "UserList";
export {
  s as UserList
};
//# sourceMappingURL=UserList.js.map
