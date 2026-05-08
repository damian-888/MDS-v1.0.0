import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const c = s(({
  size: l = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const t = h(), o = a ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    a ? /* @__PURE__ */ r("title", { id: o, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M15.704 8.296a1.127 1.127 0 1 1 1.594-1.594l.327.33V4.5a1.125 1.125 0 1 1 2.25 0v2.531l.33-.33a1.126 1.126 0 0 1 1.923.797 1.13 1.13 0 0 1-.33.797l-2.25 2.25a1.125 1.125 0 0 1-1.594 0zM22.875 15v3.75A1.875 1.875 0 0 1 21 20.625h-5.25a1.13 1.13 0 0 1-.827-.362l-8.665-9.388H3A1.875 1.875 0 0 1 1.125 9V5.25A1.875 1.875 0 0 1 3 3.375h5.25a1.13 1.13 0 0 1 .827.362l8.665 9.388H21A1.875 1.875 0 0 1 22.875 15m-2.25.375H17.25a1.13 1.13 0 0 1-.827-.362L7.758 5.625H3.375v3H6.75a1.13 1.13 0 0 1 .827.362l8.665 9.388h4.383z" })
  ] });
});
c.displayName = "EscalatorDown";
export {
  c as EscalatorDown
};
//# sourceMappingURL=EscalatorDown.js.map
