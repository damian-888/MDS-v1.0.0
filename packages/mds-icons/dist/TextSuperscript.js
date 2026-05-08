import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const p = s(({
  size: a = "1em",
  title: r,
  titleId: i,
  ...o
}, d) => {
  const t = c(), e = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    r ? /* @__PURE__ */ l("title", { id: e, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M23.625 13.5a1.125 1.125 0 0 1-1.125 1.125H18a1.125 1.125 0 0 1-.9-1.8l4.047-5.395a1.125 1.125 0 1 0-1.958-1.055 1.125 1.125 0 1 1-2.122-.75c.116-.325.28-.63.488-.906a3.375 3.375 0 0 1 5.39 4.063l-2.695 3.593h2.25a1.125 1.125 0 0 1 1.125 1.125m-9.388-6.85a1.125 1.125 0 0 0-1.587.113l-4.025 4.644L4.6 6.763a1.125 1.125 0 1 0-1.7 1.474l4.236 4.888L2.9 18.013a1.125 1.125 0 1 0 1.7 1.474l4.025-4.645 4.025 4.645a1.12 1.12 0 0 0 1.587.113 1.127 1.127 0 0 0 .114-1.587l-4.237-4.888 4.236-4.888a1.125 1.125 0 0 0-.113-1.586" })
  ] });
});
p.displayName = "TextSuperscript";
export {
  p as TextSuperscript
};
//# sourceMappingURL=TextSuperscript.js.map
