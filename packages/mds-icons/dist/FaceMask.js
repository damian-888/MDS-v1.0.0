import { jsxs as c, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...h
}, l) => {
  const i = n(), e = a ? d ?? i : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": e, ...h, children: [
    a ? /* @__PURE__ */ o("title", { id: e, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M8.625 8.25h6.75a1.125 1.125 0 1 1 0 2.25h-6.75a1.125 1.125 0 1 1 0-2.25m6.75 3.75h-6.75a1.125 1.125 0 0 0 0 2.25h6.75a1.125 1.125 0 1 0 0-2.25M24 9.75V12a3.375 3.375 0 0 1-3.375 3.376h-.577c-.676 1.451-1.942 2.707-3.756 3.705a15.9 15.9 0 0 1-4.072 1.523 1.1 1.1 0 0 1-.44 0 15.9 15.9 0 0 1-4.072-1.523c-1.814-.998-3.08-2.25-3.756-3.705h-.577A3.375 3.375 0 0 1 0 12V9.75a3.375 3.375 0 0 1 3.375-3.375h.188c.204-.418.556-.744.989-.916l6.75-2.7c.447-.18.946-.18 1.393 0l6.75 2.7c.433.17.787.497.992.916h.188A3.375 3.375 0 0 1 24 9.75M3.387 13.127a6 6 0 0 1-.012-.375V8.626A1.125 1.125 0 0 0 2.25 9.75V12a1.125 1.125 0 0 0 1.125 1.125zm14.988-5.671L12 4.905l-6.375 2.55v5.296c0 3.809 5.224 5.31 6.375 5.596 1.148-.281 6.375-1.786 6.375-5.596zm3.375 2.296a1.125 1.125 0 0 0-1.125-1.125v4.125q0 .19-.012.375h.012A1.125 1.125 0 0 0 21.75 12z" })
  ] });
});
s.displayName = "FaceMask";
export {
  s as FaceMask
};
//# sourceMappingURL=FaceMask.js.map
