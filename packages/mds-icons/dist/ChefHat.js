import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const h = m(), e = a ? o ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    a ? /* @__PURE__ */ l("title", { id: e, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M22.875 10.5a5.63 5.63 0 0 0-5.625-5.624q-.14-.002-.274.007a5.625 5.625 0 0 0-9.952 0c-.086-.007-.18-.007-.274-.007A5.625 5.625 0 0 0 4.125 15.47v4.03A1.875 1.875 0 0 0 6 21.377h12a1.875 1.875 0 0 0 1.875-1.875V15.47a5.63 5.63 0 0 0 3-4.97m-5.25 8.626H6.375v-3.014q.185.013.375.014h10.5q.19-.001.375-.014zm-.375-5.25h-.809l.4-1.602a1.126 1.126 0 0 0-2.182-.546l-.537 2.148h-.997V12a1.125 1.125 0 0 0-2.25 0v1.875h-.997l-.537-2.148a1.124 1.124 0 1 0-2.182.546l.4 1.602H6.75a3.375 3.375 0 0 1-.363-6.73 6 6 0 0 0-.012.355 1.125 1.125 0 1 0 2.25 0 3.375 3.375 0 1 1 6.75 0 1.125 1.125 0 1 0 2.25 0q0-.179-.012-.355a3.375 3.375 0 0 1-.363 6.73" })
  ] });
});
s.displayName = "ChefHat";
export {
  s as ChefHat
};
//# sourceMappingURL=ChefHat.js.map
