import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...e
}, i) => {
  const n = m(), l = o ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": l, ...e, children: [
    o ? /* @__PURE__ */ a("title", { id: l, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M21.776 6.686a1.13 1.13 0 0 0-.656-.305 4.5 4.5 0 0 0-5.174-2.906 4.5 4.5 0 0 0-7.898 0A4.5 4.5 0 0 0 2.874 6.38a1.125 1.125 0 0 0-.969 1.376L4.77 19.93a1.87 1.87 0 0 0 1.825 1.445h10.812a1.87 1.87 0 0 0 1.825-1.445l2.864-12.172a1.13 1.13 0 0 0-.319-1.071M7.126 5.624a2.2 2.2 0 0 1 1.052.262 1.125 1.125 0 0 0 1.626-.75 2.25 2.25 0 0 1 4.392 0 1.125 1.125 0 0 0 1.626.75 2.25 2.25 0 0 1 3.095 1.039l-3.106.887-3.114-1.245a1.87 1.87 0 0 0-1.393 0L8.188 7.812l-3.106-.887a2.25 2.25 0 0 1 2.042-1.3M9.48 9.718 12 8.711l2.52 1.007-1.255 9.406h-2.532zm-4.947-.61 2.698.77 1.233 9.246H6.89zm12.575 10.016h-1.574l1.233-9.245 2.698-.77z" })
  ] });
});
s.displayName = "Popcorn";
export {
  s as Popcorn
};
//# sourceMappingURL=Popcorn.js.map
