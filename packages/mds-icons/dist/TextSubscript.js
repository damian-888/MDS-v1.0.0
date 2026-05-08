import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const h = s(({
  size: a = "1em",
  title: r,
  titleId: i,
  ...o
}, d) => {
  const t = c(), l = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": l, ...o, children: [
    r ? /* @__PURE__ */ e("title", { id: l, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M23.625 19.5a1.125 1.125 0 0 1-1.125 1.125H18a1.125 1.125 0 0 1-.9-1.8l4.047-5.396a1.127 1.127 0 0 0-.7-1.786 1.124 1.124 0 0 0-1.258.732 1.125 1.125 0 1 1-2.122-.75 3.375 3.375 0 1 1 5.878 3.157l-2.695 3.593h2.25a1.125 1.125 0 0 1 1.125 1.125M14.237 4.4a1.125 1.125 0 0 0-1.587.113L8.625 9.158 4.6 4.513a1.125 1.125 0 0 0-1.7 1.474l4.236 4.888L2.9 15.763a1.125 1.125 0 1 0 1.7 1.474l4.025-4.644 4.025 4.644a1.12 1.12 0 0 0 1.587.114 1.127 1.127 0 0 0 .114-1.588l-4.237-4.888 4.236-4.888a1.125 1.125 0 0 0-.113-1.587" })
  ] });
});
h.displayName = "TextSubscript";
export {
  h as TextSubscript
};
//# sourceMappingURL=TextSubscript.js.map
