import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: o,
  titleId: e,
  ...i
}, a) => {
  const t = m(), l = o ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: a, "aria-labelledby": l, ...i, children: [
    o ? /* @__PURE__ */ d("title", { id: l, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m20.449 19.646-5.719-8.981 5.599-6.158a1.125 1.125 0 0 0-1.665-1.514l-5.182 5.704-3.533-5.55A1.13 1.13 0 0 0 9 2.624H4.5a1.125 1.125 0 0 0-.948 1.729l5.718 8.981-5.602 6.158a1.125 1.125 0 1 0 1.665 1.514l5.185-5.704 3.534 5.55a1.13 1.13 0 0 0 .948.522h4.5a1.125 1.125 0 0 0 .949-1.729m-4.83-.521-9.07-14.25h1.833l9.069 14.25z" })
  ] });
});
s.displayName = "XLogo";
export {
  s as XLogo
};
//# sourceMappingURL=XLogo.js.map
