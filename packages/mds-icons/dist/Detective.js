import { jsxs as h, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: a = "1em",
  title: e,
  titleId: i,
  ...o
}, d) => {
  const t = m(), r = e ? i ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    e ? /* @__PURE__ */ l("title", { id: r, children: e }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M22.875 9.75h-2.324l-4.068-5.602a1.875 1.875 0 0 0-2.963-.088l-1.202 1.393-.027.033a.375.375 0 0 1-.582 0l-.027-.033L10.48 4.06a1.875 1.875 0 0 0-2.963.088L3.449 9.751H1.125a1.125 1.125 0 1 0 0 2.25h21.75a1.125 1.125 0 1 0 0-2.25M9.058 5.857l.909 1.053a2.624 2.624 0 0 0 4.066 0l.909-1.053L17.77 9.75H6.23zm7.817 7.27a3.76 3.76 0 0 0-3.578 2.625h-2.594a3.75 3.75 0 1 0 0 2.25h2.595a3.749 3.749 0 1 0 3.577-4.875m-9.75 5.25a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m9.75 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" })
  ] });
});
s.displayName = "Detective";
export {
  s as Detective
};
//# sourceMappingURL=Detective.js.map
