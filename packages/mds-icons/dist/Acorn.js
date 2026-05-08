import { jsxs as c, jsx as a } from "react/jsx-runtime";
import { forwardRef as t, useId as h } from "react";
const s = t(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...i
}, l) => {
  const n = h(), d = r ? e ?? n : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": d, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: d, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M22.125 9.75A5.63 5.63 0 0 0 16.5 4.125h-3.338A1.875 1.875 0 0 1 15 2.625a1.125 1.125 0 0 0 0-2.25 4.13 4.13 0 0 0-4.107 3.75H7.5A5.63 5.63 0 0 0 1.875 9.75a1.88 1.88 0 0 0 .75 1.5V12c0 3.51 3.188 6.067 5.74 8.12.958.768 2.403 1.93 2.51 2.396a1.125 1.125 0 1 0 2.25 0c.107-.469 1.552-1.628 2.51-2.396 2.557-2.053 5.74-4.61 5.74-8.12v-.75a1.88 1.88 0 0 0 .75-1.5M7.5 6.375h9a3.38 3.38 0 0 1 3.354 3H4.146a3.38 3.38 0 0 1 3.354-3m6.726 11.99c-.86.69-1.637 1.313-2.226 1.927-.589-.612-1.366-1.236-2.226-1.926-2.18-1.753-4.899-3.934-4.899-6.366v-.375h14.25V12c0 2.432-2.719 4.613-4.9 6.366" })
  ] });
});
s.displayName = "Acorn";
export {
  s as Acorn
};
//# sourceMappingURL=Acorn.js.map
