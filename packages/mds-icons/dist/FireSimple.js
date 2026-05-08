import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as c, useId as m } from "react";
const s = c(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...d
}, a) => {
  const t = m(), i = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: i, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M13.68 1.384a1.125 1.125 0 0 0-1.774.48l-1.868 5.12-1.846-1.792a1.125 1.125 0 0 0-1.678.125c-2.082 2.728-3.139 5.481-3.139 8.182a8.625 8.625 0 1 0 17.25 0c0-5.733-4.856-10.383-6.944-12.115M12 19.874A6.38 6.38 0 0 1 5.625 13.5c0-1.87.656-3.808 1.942-5.779l2.15 2.086a1.125 1.125 0 0 0 1.84-.421L13.45 4.19c2.054 1.96 4.924 5.398 4.924 9.308A6.38 6.38 0 0 1 12 19.874" })
  ] });
});
s.displayName = "FireSimple";
export {
  s as FireSimple
};
//# sourceMappingURL=FireSimple.js.map
