import { jsxs as c, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const m = n(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...d
}, i) => {
  const t = h(), l = r ? a ?? t : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: l, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21.121 15.556c-.813-1.4-1.246-3.409-1.246-5.806a7.875 7.875 0 0 0-15.75 0c0 2.398-.43 4.406-1.244 5.806a1.883 1.883 0 0 0 .679 2.571c.286.165.61.25.94.248h3.392a4.125 4.125 0 0 0 8.216 0H19.5a1.85 1.85 0 0 0 1.623-.937 1.88 1.88 0 0 0-.002-1.882m-9.12 4.319a1.875 1.875 0 0 1-1.838-1.5h3.675a1.876 1.876 0 0 1-1.838 1.5m-6.876-3.75c.83-1.687 1.25-3.83 1.25-6.375a5.625 5.625 0 0 1 11.25 0c0 2.543.42 4.688 1.25 6.375z" })
  ] });
});
m.displayName = "Bell";
export {
  m as Bell
};
//# sourceMappingURL=Bell.js.map
