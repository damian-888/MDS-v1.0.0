import { jsxs as a, jsx as d } from "react/jsx-runtime";
import { forwardRef as c, useId as s } from "react";
const m = c(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...t
}, l) => {
  const n = s(), e = o ? i ?? n : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": e, ...t, children: [
    o ? /* @__PURE__ */ d("title", { id: e, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M17.707 2.653c-1.825-.75-3.993-.965-6.104-.613-2.276.375-4.25 1.362-5.707 2.844-3.508 3.568-2.798 10.825-1.209 14.605.644 1.545 1.782 3.387 3.517 3.387 2.38 0 3.442-2.076 4.38-3.908.632-1.232 1.284-2.507 2.272-3.177.515-.349 1.24-.628 2.008-.925 2.22-.855 5.26-2.028 5.26-6.13 0-2.718-1.61-4.935-4.417-6.083m-1.653 10.115c-.852.328-1.733.668-2.46 1.161-1.466.994-2.287 2.598-3.013 4.013-.85 1.665-1.422 2.684-2.377 2.684-.12 0-.75-.358-1.445-2.007-1.37-3.267-1.894-9.477.74-12.158 1.106-1.125 2.694-1.907 4.472-2.202a10 10 0 0 1 1.594-.13 8.8 8.8 0 0 1 3.288.606c1.125.461 3.02 1.594 3.02 4 .002 2.435-1.45 3.118-3.82 4.033" })
  ] });
});
m.displayName = "PatreonLogo";
export {
  m as PatreonLogo
};
//# sourceMappingURL=PatreonLogo.js.map
