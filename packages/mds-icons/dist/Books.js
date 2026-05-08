import { jsxs as m, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: r = "1em",
  title: o,
  titleId: a,
  ...e
}, i) => {
  const h = n(), d = o ? a ?? h : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": d, ...e, children: [
    o ? /* @__PURE__ */ l("title", { id: d, children: o }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M22.085 18.161 18.973 3.368a1.875 1.875 0 0 0-2.227-1.452l-4.389.944a1.86 1.86 0 0 0-1.031.623 1.88 1.88 0 0 0-1.576-.859h-4.5A1.875 1.875 0 0 0 3.375 4.5v15a1.875 1.875 0 0 0 1.875 1.875h4.5a1.875 1.875 0 0 0 1.875-1.875V8.46l2.402 11.42a1.874 1.874 0 0 0 2.227 1.452l4.389-.943a1.884 1.884 0 0 0 1.442-2.228m-8.192-9.85 3.656-.786.237 1.125-3.656.785zm.7 3.327 3.655-.785.86 4.085-3.657.786zm2.255-7.443.237 1.125-3.656.786-.237-1.125zM5.625 8.25h3.75v7.5h-3.75zm3.75-3.375V6h-3.75V4.874zm-3.75 14.25V18h3.75v1.125zm10.527-.071-.237-1.125 3.656-.786.237 1.125z" })
  ] });
});
s.displayName = "Books";
export {
  s as Books
};
//# sourceMappingURL=Books.js.map
