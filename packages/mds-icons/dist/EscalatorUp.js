import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: a = "1em",
  title: l,
  titleId: d,
  ...e
}, i) => {
  const t = h(), r = l ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    l ? /* @__PURE__ */ o("title", { id: r, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21 3.375h-5.25a1.13 1.13 0 0 0-.827.362l-8.665 9.388H3A1.875 1.875 0 0 0 1.125 15v3.75A1.875 1.875 0 0 0 3 20.625h5.25a1.13 1.13 0 0 0 .827-.362l8.665-9.388H21A1.875 1.875 0 0 0 22.875 9V5.25A1.875 1.875 0 0 0 21 3.375m-.375 5.25H17.25a1.13 1.13 0 0 0-.827.362l-8.665 9.388H3.375v-3H6.75a1.13 1.13 0 0 0 .827-.362l8.665-9.388h4.383zm1.17 7.08a1.127 1.127 0 1 1-1.593 1.593l-.327-.33V19.5a1.125 1.125 0 1 1-2.25 0v-2.531l-.33.33a1.127 1.127 0 1 1-1.593-1.594l2.25-2.25a1.125 1.125 0 0 1 1.594 0z" })
  ] });
});
m.displayName = "EscalatorUp";
export {
  m as EscalatorUp
};
//# sourceMappingURL=EscalatorUp.js.map
