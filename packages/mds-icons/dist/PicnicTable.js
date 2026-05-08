import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as t, useId as c } from "react";
const s = t(({
  size: i = "1em",
  title: l,
  titleId: e,
  ...o
}, d) => {
  const h = c(), r = l ? e ?? h : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    l ? /* @__PURE__ */ a("title", { id: r, children: l }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M22.875 11.625h-3.804l-2.25-4.5H18a1.125 1.125 0 0 0 0-2.25H6a1.125 1.125 0 0 0 0 2.25h1.18l-2.25 4.5H1.124a1.125 1.125 0 1 0 0 2.25h2.68l-1.81 3.622a1.124 1.124 0 1 0 2.01 1.006l2.316-4.628h11.358l2.315 4.628a1.123 1.123 0 0 0 1.521.527 1.125 1.125 0 0 0 .49-1.533l-1.81-3.622h2.68a1.125 1.125 0 1 0 0-2.25m-15.43 0 2.25-4.5h4.61l2.25 4.5z" })
  ] });
});
s.displayName = "PicnicTable";
export {
  s as PicnicTable
};
//# sourceMappingURL=PicnicTable.js.map
