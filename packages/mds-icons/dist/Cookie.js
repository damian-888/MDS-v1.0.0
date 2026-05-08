import { jsxs as m, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...a
}, l) => {
  const t = s(), e = o ? d ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": e, ...a, children: [
    o ? /* @__PURE__ */ i("title", { id: e, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M15.685 15.065a1.5 1.5 0 1 1-2.119 2.121 1.5 1.5 0 0 1 2.12-2.121m-8.12-.75a1.5 1.5 0 1 0 2.12 2.122 1.5 1.5 0 0 0-2.12-2.122m1.37-3.13a1.5 1.5 0 1 0-2.12-2.122 1.5 1.5 0 0 0 2.12 2.122m4.5-.62a1.5 1.5 0 1 0-2.122 2.12 1.5 1.5 0 0 0 2.122-2.12M22.125 12A10.124 10.124 0 1 1 12 1.875 1.125 1.125 0 0 1 13.125 3 3.375 3.375 0 0 0 16.5 6.375 1.125 1.125 0 0 1 17.625 7.5 3.375 3.375 0 0 0 21 10.875 1.125 1.125 0 0 1 22.125 12m-2.313.998a5.64 5.64 0 0 1-4.343-4.467A5.64 5.64 0 0 1 11 4.19 7.875 7.875 0 1 0 19.813 13z" })
  ] });
});
h.displayName = "Cookie";
export {
  h as Cookie
};
//# sourceMappingURL=Cookie.js.map
